import { useEffect, useRef } from "react";
import { MdEdit } from "react-icons/md";
import AvailabilityCalendarEvent from "./AvailabilityCalendarEvent";

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

  useEffect(() => {
    if (container.current) {
      //Scroll to 7:30AM
      container.current.scrollTop = 885;
    }
  }, []);

  return (
    <div className="flex h-full flex-col overflow-auto">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Weekly Availability
        </h1>
        <button
          type="button"
          className="ml-6 flex items-center gap-2 rounded-md  bg-primary-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          <MdEdit />
          Edit
        </button>
      </header>
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
              {Days.map((day) => (
                <button
                  type="button"
                  className="flex flex-col items-center pt-2 pb-3"
                  key={day.name}
                >
                  {day.abbr}
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
                  gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
                }}
              >
                <AvailabilityCalendarEvent
                  type="SHIFT"
                  day={1}
                  start={600}
                  end={660}
                  name="Test Shift"
                  location="Test Location"
                />
                <AvailabilityCalendarEvent
                  type="AVAILABILITY"
                  day={1}
                  start={480}
                  end={1050}
                />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
