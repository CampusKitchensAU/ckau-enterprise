import { useEffect, useRef, useState } from "react";
import { MdAddCircleOutline, MdClose, MdEdit, MdSave } from "react-icons/md";
import convertTo12Hour from "../utils/convertTo12Hour";
import useMediaQuery from "../utils/useMediaQuery";
import AvailabilityCalendarEvent from "./AvailabilityCalendarEvent";
import TimeSelect from "./TimeSelect";

//TODO: Get data from db when available to
type testDataType = {
  id: number;
  type: "SHIFT" | "AVAILABILITY";
  day: number;
  start: number;
  end: number;
  name?: string;
  location?: string;
};
const testData: testDataType[] = [
  {
    id: 1,
    type: "SHIFT",
    day: 1,
    start: 600,
    end: 660,
    name: "Test Shift",
    location: "Test Location",
  },
  {
    id: 2,
    type: "AVAILABILITY",
    day: 1,
    start: 480,
    end: 1050,
  },
  {
    id: 3,
    type: "SHIFT",
    day: 3,
    start: 900,
    end: 960,
    name: "Test Shift",
    location: "Test Location",
  },
  {
    id: 4,
    type: "AVAILABILITY",
    day: 3,
    start: 720,
    end: 1050,
  },
];

type AvailabilitySlot = {
  id: number;
  day: number;
  start: number;
  end: number;
};

const Days = [
  { name: "Monday", abbr: "M" },
  { name: "Tuesday", abbr: "T" },
  { name: "Wednesday", abbr: "W" },
  { name: "Thursday", abbr: "T" },
  { name: "Friday", abbr: "F" },
  { name: "Saturday", abbr: "S" },
  { name: "Sunday", abbr: "S" },
];

const Times = [
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
];

const AvailabilityCalendar = () => {
  const container = useRef<HTMLDivElement>(null);
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([]);
  const [newAvailability, setNewAvailability] = useState<AvailabilitySlot[]>(
    []
  );
  const [selectedDay, setSelectedDay] = useState(0);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isEditing, setIsEditing] = useState(false);
  const [newSelectedDays, setNewSelectedDays] = useState<number[]>([]);
  const [newStartTime, setNewStartTime] = useState(-1);
  const [newEndTime, setNewEndTime] = useState(-1);
  const [newValidated, setNewValidated] = useState(false);
  const [resetTimePicker, setResetTimePicker] = useState(false);

  const save = () => {
    //TODO: Save to db
    setAvailability(newAvailability);
  };

  const addAvailability = () => {
    newSelectedDays.forEach((day) => {
      setNewAvailability((prev) => [
        ...prev,
        {
          id: Math.floor(Math.random() * 100000),
          day,
          start: newStartTime,
          end: newEndTime,
        },
      ]);
    });
    setNewSelectedDays([]);
    setNewStartTime(0);
    setNewEndTime(0);
    setResetTimePicker((prev) => !prev);
  };

  useEffect(() => {
    if (container.current) {
      //Scroll to 7:30AM
      container.current.scrollTop = 885;
    }
  }, []);

  useEffect(() => {
    let overlap = false;
    if (newSelectedDays.length > 0 && newStartTime < newEndTime) {
      newAvailability.forEach((slot) => {
        if (newSelectedDays.includes(slot.day)) {
          if (
            (slot.start >= newStartTime && slot.start < newEndTime) ||
            (slot.end > newStartTime && slot.end <= newEndTime)
          ) {
            overlap = true;
            return;
          }
        }
      });
      overlap ? setNewValidated(false) : setNewValidated(true);
    } else {
      setNewValidated(false);
    }
  }, [newSelectedDays, newStartTime, newEndTime, newAvailability]);

  useEffect(() => {
    //sort newAvailability by day and start time
    setNewAvailability((prev) =>
      prev.sort((a, b) => {
        if (a.day === b.day) {
          return a.start - b.start;
        }
        return a.day - b.day;
      })
    );
  }, [newAvailability]);

  return (
    <div className="flex h-full flex-col overflow-auto">
      <header
        className={`${
          isEditing ? "flex-col gap-2" : ""
        } flex items-center justify-between border-b border-gray-200 py-4 px-6 sm2:flex-row`}
      >
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Weekly Availability
          </h1>

          <span
            className={`text-sm text-gray-400 ${
              isEditing ? "block" : "hidden"
            }`}
          >
            (Editing)
          </span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <button
            className={`rounded-md py-2 px-3 text-sm font-semibold text-red-500 underline-offset-2 hover:text-red-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${
              isEditing ? "block" : "hidden"
            }`}
            onClick={() => {
              setNewAvailability(availability);
              if (container.current) container.current.scrollTop = 885;
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className={`flex items-center gap-2 rounded-md py-2 px-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          ${
            isEditing
              ? "bg-gray-200  text-gray-600 hover:bg-gray-300 focus-visible:outline-gray-500 "
              : "bg-primary-500 text-white hover:bg-primary-400 focus-visible:outline-primary-500"
          }`}
            onClick={() => {
              if (isEditing) {
                setIsEditing(false);
                save();
              } else {
                if (container.current) container.current.scrollTop = 0;
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? (
              <>
                <MdSave /> Save
              </>
            ) : (
              <>
                <MdEdit /> Edit
              </>
            )}
          </button>
        </div>
      </header>
      {isEditing ? (
        <div className="flex h-full flex-auto flex-col gap-8 overflow-auto bg-white p-6 md:items-center xl:flex-row xl:items-start xl:justify-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-semibold text-primary-500">
              Add/Remove Availability
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2 overflow-auto">
                {Days.map((day, i) => (
                  <button
                    key={day.name}
                    className={`h-9 rounded-lg border-2 p-1 text-sm  hover:border-primary-300 hover:text-primary-400 ${
                      newSelectedDays.includes(i)
                        ? "border-primary-500 text-primary-600"
                        : "border-gray-300 text-gray-400"
                    }`}
                    onClick={() => {
                      if (newSelectedDays.includes(i)) {
                        setNewSelectedDays(
                          newSelectedDays.filter((day) => day !== i)
                        );
                      } else {
                        setNewSelectedDays([...newSelectedDays, i]);
                      }
                    }}
                  >
                    {day.name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:items-center">
                <div className="flex grow items-center gap-2">
                  <span className="min-w-[48px] text-gray-400 md:min-w-[auto]">
                    From
                  </span>
                  <TimeSelect
                    callback={setNewStartTime}
                    reset={resetTimePicker}
                  />
                </div>
                <div className="flex grow items-center gap-2">
                  <span className="min-w-[48px] text-gray-400 sm:min-w-[auto]">
                    to
                  </span>
                  <TimeSelect
                    callback={setNewEndTime}
                    reset={resetTimePicker}
                  />
                </div>
              </div>
              <button
                disabled={!newValidated}
                className={`flex h-9 items-center justify-center gap-1 rounded-lg px-2 text-sm ${
                  newValidated
                    ? "bg-primary-500 text-white hover:bg-primary-400 focus-visible:outline-primary-500"
                    : "bg-gray-200 text-gray-400 focus-visible:outline-gray-500"
                } `}
                onClick={() => addAvailability()}
              >
                <MdAddCircleOutline className="text-xl" />
                Add
              </button>
            </div>
          </div>
          <div className="w-full min-w-[255px] border-t-2 border-gray-300 py-2 md:px-12 xl:border-l-2 xl:border-t-0 xl:px-8">
            {Days.map((day, i) => (
              <div
                key={day.name}
                className={`${
                  i != Days.length - 1 && "border-b border-gray-200"
                }`}
              >
                <h3 className="font-semibold text-primary-500">{day.name}</h3>
                {newAvailability.filter((slot) => slot.day === i).length > 0 ? (
                  newAvailability
                    .filter((slot) => slot.day === i)
                    .map((slot, i) => (
                      <div
                        key={i}
                        className="flex cursor-pointer items-center gap-2 py-1 hover:font-semibold hover:text-red-600"
                        onClick={() => {
                          setNewAvailability(
                            newAvailability.filter((s) => s !== slot)
                          );
                        }}
                      >
                        <span>{convertTo12Hour(slot.start)}</span>
                        <span>to</span>
                        <span>{convertTo12Hour(slot.end)}</span>
                        <MdClose className="text-gray-400" />
                      </div>
                    ))
                ) : (
                  <div className="py-1 text-gray-400">No Availability</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          ref={container}
          className="isolate flex flex-auto flex-col overflow-auto bg-white"
        >
          <div
            style={{ width: "165%" }}
            className="flex max-w-full flex-none flex-col sm:max-w-none lg:max-w-full"
          >
            {/** Days Header */}
            <div className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
              {/** Mobile Days */}
              <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                {Days.map((day, i) => (
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                    key={day.name}
                    onClick={() => setSelectedDay(i)}
                  >
                    <span
                      className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full ${
                        selectedDay === i &&
                        "bg-primary-600 font-semibold text-white"
                      }`}
                    >
                      {day.abbr}
                    </span>
                  </button>
                ))}
              </div>
              {/** Web Days */}
              <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
                <div className="col-end-1 w-14" />
                {Days.map((day) => (
                  <div
                    key={day.name}
                    className="flex items-center justify-center py-3"
                  >
                    <span>{day.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/** Times Grid*/}
            <div className="flex flex-auto">
              <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
              <div className="grid flex-auto grid-cols-1 grid-rows-1">
                {/* Horizontal lines */}
                <div
                  className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                  style={{
                    gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))",
                  }}
                >
                  <div className="row-end-1 h-7"></div>
                  {Times.map((time) => (
                    <>
                      <div key={time}>
                        <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                          {time}
                        </div>
                      </div>
                      <div />
                    </>
                  ))}
                </div>
                {/* Vertical lines */}
                <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                  <div className="col-start-1 row-span-full" />
                  <div className="col-start-2 row-span-full" />
                  <div className="col-start-3 row-span-full" />
                  <div className="col-start-4 row-span-full" />
                  <div className="col-start-5 row-span-full" />
                  <div className="col-start-6 row-span-full" />
                  <div className="col-start-7 row-span-full" />
                  <div className="col-start-8 row-span-full w-8" />
                </div>
                {/* Events */}
                <ol
                  className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                  style={{
                    gridTemplateRows:
                      "1.75rem repeat(288, minmax(0, 1fr)) auto",
                  }}
                >
                  {testData.map((event) => {
                    if (isMobile && event.day !== selectedDay + 1) return null;
                    return (
                      <AvailabilityCalendarEvent
                        key={event.id}
                        type={event.type}
                        day={event.day}
                        start={event.start}
                        end={event.end}
                        name={event.name}
                        location={event.location}
                      />
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailabilityCalendar;
