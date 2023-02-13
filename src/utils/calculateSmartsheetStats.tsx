import { FaTruck, FaWeight } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import type { Sheet } from "../server/api/routers/smartsheet/smartsheetTypes";

export type WeeklyData = {
  week: Date;
  weekDisplay: string;
  poundsPickedUp: number;
  mealsPackaged: number;
  mealsDelivered: number;
  shiftsCompleted: number;
  uniqueVolunteers: number;
  shiftLeaders: ShiftLeaderData[];
};

export type ShiftLeaderData = {
  name: string;
  completedShifts: number;
};

/**
 * Calculates the necessary data for the stats section of the dashboard.
 * @param data - Sheet data fetched from Smartsheet API.
 * @returns object containing necessary data for the stats section of the dashboard.
 */
export const calculateSmartsheetStats = (data: Sheet) => {
  const weeklyData = getWeeklyData(data);
  const totalSums = getTotalSums(weeklyData);
  const mostActiveShiftLeader = getMostShiftsThisWeek(weeklyData);

  return {
    mainStats: [
      {
        name: "Total Pounds Recovered",
        value: Number(totalSums.poundsPickedUp.toFixed(2)),
        trend: Number(
          weeklyData[weeklyData.length - 1]?.poundsPickedUp.toFixed(2)
        ),
        icon: <FaWeight />,
      },
      {
        name: "Total Meals Packaged",
        value: Number(totalSums.mealsPackaged.toFixed(2)),
        trend: Number(
          weeklyData[weeklyData.length - 1]?.mealsPackaged.toFixed(2)
        ),
        icon: <ImSpoonKnife />,
      },
      {
        name: "Total Meals Delivered",
        value: Number(totalSums.mealsDelivered.toFixed(2)),
        trend: Number(
          weeklyData[weeklyData.length - 1]?.mealsDelivered.toFixed(2)
        ),
        icon: <FaTruck />,
      },
    ],
    fourWeekPickupTrend: [
      {
        week: weeklyData[weeklyData.length - 4]?.weekDisplay,
        pounds: weeklyData[weeklyData.length - 4]?.poundsPickedUp,
      },
      {
        week: weeklyData[weeklyData.length - 3]?.weekDisplay,
        pounds: weeklyData[weeklyData.length - 3]?.poundsPickedUp,
      },
      {
        week: weeklyData[weeklyData.length - 2]?.weekDisplay,
        pounds: weeklyData[weeklyData.length - 2]?.poundsPickedUp,
      },
      {
        week: weeklyData[weeklyData.length - 1]?.weekDisplay,
        pounds: weeklyData[weeklyData.length - 1]?.poundsPickedUp,
      },
    ],
    altStats: [
      {
        name: "Shifts Completed",
        value: totalSums.shiftsCompleted,
        trend: weeklyData[weeklyData.length - 1]?.shiftsCompleted,
      },
      {
        name: "Partners",
        value: 20, //TODO: Get this from database when we add data, this is currently not stored in smartsheet.
        trend: 0,
      },
      {
        name: "Total Volunteers",
        value: totalSums.uniqueVolunteers,
        trend: weeklyData[weeklyData.length - 1]?.uniqueVolunteers,
      },
    ],
    mostActiveShiftLeader,
  };
};

/**
 * Calculates the start date of the week for a given date.
 * @param date - Date to calculate the start of the week for.
 * @returns Date object representing the start of the week.
 */
const getStartOfWeek = (date: Date) => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day == 0 ? -6 : 1);
  const sunday = new Date(date.setDate(diff));
  sunday.setHours(0, 0, 0, 0);
  return sunday;
};

/**
 * Compares two dates and returns -1 if date1 is before date2, 1 if date1 is after date2, and 0 if they are equal.
 * @param date1 - Date to compare.
 * @param date2 - Date to compare.
 * @returns -1 if date1 is before date2, 1 if date1 is after date2, and 0 if they are equal.
 */
const compareDates = (date1: Date, date2: Date) => {
  const timeDiff = date1.getTime() - date2.getTime();
  if (timeDiff < 0) return -1;
  if (timeDiff > 0) return 1;
  return 0;
};

/**
 * Calculates data to be store by week in an array.
 * @param data - Sheet data fetched from Smartsheet API.
 * @returns array of WeeklyData objects containing the necessary data for the stats section of the dashboard.
 */
const getWeeklyData = (data: Sheet) => {
  const weeklyData: WeeklyData[] = [];
  //loop each row of the sheet
  data.rows.forEach((row) => {
    //Cell 1 is the date of the shift
    if (row.cells[1] && typeof row.cells[1].value === "string") {
      //Get the start of the week for the shift
      const week = getStartOfWeek(new Date(row.cells[1].value));
      //Get the date in a readable format
      const weekDisplay = week.toDateString().slice(4, 10);
      //Check if we already have data for this week
      const existingWeek = weeklyData.find(
        (w) => compareDates(w.week, week) === 0
      );
      //If we do, add the data to the existing week
      if (existingWeek) {
        //Cell 26 is the total pounds picked up
        if (row.cells[26] && typeof row.cells[26].value === "number") {
          existingWeek.poundsPickedUp += Number(row.cells[26].value.toFixed(2));
        }
        //Cell 52 is the total meals packaged
        if (row.cells[52] && typeof row.cells[52].value === "number") {
          existingWeek.mealsPackaged += Number(row.cells[52].value.toFixed(2));
        }
        //Cell 29 is the total meals delivered
        if (row.cells[29] && typeof row.cells[29].value === "number") {
          existingWeek.mealsDelivered += Number(row.cells[29].value.toFixed(2));
        }
        //Cell 30 is the total pans delivered, each pan is 10 meals
        if (row.cells[30] && typeof row.cells[30].value === "number") {
          existingWeek.mealsDelivered +=
            Number(row.cells[30].value.toFixed(2)) * 10;
        }
        //Cell 14 is the total new volunteers
        if (row.cells[14] && typeof row.cells[14].value === "number") {
          existingWeek.uniqueVolunteers += row.cells[14].value;
        }
        //Cell 4 is First Shift Leader
        if (row.cells[4] && typeof row.cells[4].value === "string") {
          const existingShiftLeader = existingWeek.shiftLeaders.find(
            (sl) => sl.name === row.cells[4]?.value
          );
          if (existingShiftLeader) {
            existingShiftLeader.completedShifts++;
          } else {
            existingWeek.shiftLeaders.push({
              name: row.cells[4].value,
              completedShifts: 1,
            });
          }
        }
        //Cell 6 is Second Shift Leader, if there is one
        if (row.cells[6] && typeof row.cells[6].value === "string") {
          const existingShiftLeader = existingWeek.shiftLeaders.find(
            (sl) => sl.name === row.cells[6]?.value
          );
          if (existingShiftLeader) {
            existingShiftLeader.completedShifts++;
          } else {
            existingWeek.shiftLeaders.push({
              name: row.cells[6].value,
              completedShifts: 1,
            });
          }
        }
        //Cell 8 is Third Shift Leader, if there is one
        if (row.cells[8] && typeof row.cells[8].value === "string") {
          const existingShiftLeader = existingWeek.shiftLeaders.find(
            (sl) => sl.name === row.cells[8]?.value
          );
          if (existingShiftLeader) {
            existingShiftLeader.completedShifts++;
          } else {
            existingWeek.shiftLeaders.push({
              name: row.cells[8].value,
              completedShifts: 1,
            });
          }
        }
        //Cell 10 is Fourth Shift Leader, if there is one
        if (row.cells[10] && typeof row.cells[10].value === "string") {
          const existingShiftLeader = existingWeek.shiftLeaders.find(
            (sl) => sl.name === row.cells[10]?.value
          );
          if (existingShiftLeader) {
            existingShiftLeader.completedShifts++;
          } else {
            existingWeek.shiftLeaders.push({
              name: row.cells[10].value,
              completedShifts: 1,
            });
          }
        }
        //Increment the number of shifts completed
        existingWeek.shiftsCompleted++;
      } else {
        let poundsPickedUp = 0;
        let mealsPackaged = 0;
        let mealsDelivered = 0;
        let uniqueVolunteers = 0;
        const shiftLeaders: ShiftLeaderData[] = [];
        if (row.cells[26] && typeof row.cells[26].value === "number") {
          poundsPickedUp += Number(row.cells[26].value.toFixed(2));
        }
        if (row.cells[52] && typeof row.cells[52].value === "number") {
          mealsPackaged += Number(row.cells[52].value.toFixed(2));
        }
        if (row.cells[29] && typeof row.cells[29].value === "number") {
          mealsDelivered += Number(row.cells[29].value.toFixed(2));
        }
        if (row.cells[30] && typeof row.cells[30].value === "number") {
          mealsDelivered += Number(row.cells[30].value.toFixed(2)) * 10;
        }
        if (row.cells[14] && typeof row.cells[14].value === "number") {
          uniqueVolunteers += row.cells[14].value;
        }
        if (row.cells[4] && typeof row.cells[4].value === "string") {
          shiftLeaders.push({
            name: row.cells[4].value,
            completedShifts: 1,
          });
        }
        if (row.cells[6] && typeof row.cells[6].value === "string") {
          shiftLeaders.push({
            name: row.cells[6].value,
            completedShifts: 1,
          });
        }
        if (row.cells[8] && typeof row.cells[8].value === "string") {
          shiftLeaders.push({
            name: row.cells[8].value,
            completedShifts: 1,
          });
        }
        if (row.cells[10] && typeof row.cells[10].value === "string") {
          shiftLeaders.push({
            name: row.cells[10].value,
            completedShifts: 1,
          });
        }
        weeklyData.push({
          week,
          weekDisplay,
          poundsPickedUp,
          mealsPackaged,
          mealsDelivered,
          shiftsCompleted: 1,
          uniqueVolunteers,
          shiftLeaders,
        });
      }
    }
  });
  return weeklyData;
};

/**
 * Gets the total sums of all the data.
 * @param weeklyData - The weekly data to get the total sums from
 * @returns The total sums of all the data.
 */
const getTotalSums = (weeklyData: WeeklyData[]) => {
  const totalSums = {
    poundsPickedUp: 0,
    mealsPackaged: 0,
    mealsDelivered: 0,
    shiftsCompleted: 0,
    uniqueVolunteers: 0,
  };
  weeklyData.forEach((week) => {
    totalSums.poundsPickedUp += week.poundsPickedUp;
    totalSums.mealsPackaged += week.mealsPackaged;
    totalSums.mealsDelivered += week.mealsDelivered;
    totalSums.shiftsCompleted += week.shiftsCompleted;
    totalSums.uniqueVolunteers += week.uniqueVolunteers;
  });
  return totalSums;
};

/**
 * Gets the person's name who has completed the most shifts this week.
 * @param weeklyData - The weekly data to get the most shifts from.
 * @returns The person's name who has completed the most shifts this week.
 */
const getMostShiftsThisWeek = (weeklyData: WeeklyData[]) => {
  weeklyData[weeklyData.length - 1]?.shiftLeaders.sort((a, b) => {
    return b.completedShifts - a.completedShifts;
  });
  return weeklyData[weeklyData.length - 1]?.shiftLeaders[0]?.name;
};
