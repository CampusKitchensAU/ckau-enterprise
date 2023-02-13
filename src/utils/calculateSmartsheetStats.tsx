import { FaTruck, FaWeight } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import type { Sheet } from "../server/api/routers/smartsheet/smartsheetTypes";

export const calculateSmartsheetStats = (data: Sheet) => {
  let totalPoundsPickedUp = 0;
  let totalPoundsPickedUpThisWeek = 0;
  let totalMealsPackaged = 0;
  let totalMealsPackagedThisWeek = 0;
  let totalMealsDelivered = 0;
  let totalMealsDeliveredThisWeek = 0;

  const startOfWeek = getStartOfWeek();

  data.rows.forEach((row) => {
    const currentWeek =
      row.cells[1] &&
      typeof row.cells[1].value === "string" &&
      new Date(row.cells[1].value) >= startOfWeek;

    //cell 26 = meals picked up
    if (row.cells[26] && typeof row.cells[26].value === "number") {
      totalPoundsPickedUp += row.cells[26].value;
      if (currentWeek) totalPoundsPickedUpThisWeek += row.cells[26].value;
    }
    //cell 52 = meals packaged
    if (row.cells[52] && typeof row.cells[52].value === "number") {
      totalMealsPackaged += row.cells[52].value;
      if (currentWeek) totalMealsPackagedThisWeek += row.cells[52].value;
    }

    //cell 29 = meals delivered
    if (row.cells[29] && typeof row.cells[29].value === "number") {
      totalMealsDelivered += row.cells[29].value;
      if (currentWeek) totalMealsDeliveredThisWeek += row.cells[29].value;
    }
    //cell 30 = pans delivered (10 meals per pan)
    if (row.cells[30] && typeof row.cells[30].value === "number") {
      totalMealsDelivered += row.cells[30].value * 10;
      if (currentWeek) totalMealsDeliveredThisWeek += row.cells[30].value * 10;
    }
  });

  return [
    {
      name: "Total Pounds Recovered",
      value: Number(totalPoundsPickedUp.toFixed(2)),
      trend: Number(totalPoundsPickedUpThisWeek.toFixed(2)),
      icon: <FaWeight />,
    },
    {
      name: "Total Meals Packaged",
      value: Number(totalMealsPackaged.toFixed(2)),
      trend: Number(totalMealsPackagedThisWeek.toFixed(2)),
      icon: <ImSpoonKnife />,
    },
    {
      name: "Total Meals Delivered",
      value: Number(totalMealsDelivered.toFixed(2)),
      trend: Number(totalMealsDeliveredThisWeek.toFixed(2)),
      icon: <FaTruck />,
    },
  ];
};

const getStartOfWeek = () => {
  const today = new Date();
  const day = today.getDay();
  const diff = today.getDate() - day + (day == 0 ? -6 : 1);
  const sunday = new Date(today.setDate(diff));
  sunday.setHours(0, 0, 0, 0);
  return sunday;
};
