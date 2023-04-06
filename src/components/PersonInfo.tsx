import { useEffect, useRef } from "react";
import AvailabilityCalendar from "./AvailabilityCalendar";

//TODO: fix this when we get db data
const personalFields = [
  { title: "Email", value: "tza0038@auburn.edu" },
  { title: "Phone", value: "+1 (330) 635-4055" },
  { title: "Year", value: "Senior" },
  { title: "Major", value: "Software Engineering" },
  { title: "Birthday", value: "September 12" },
];

const organizationFields = [
  { title: "Responsible Shift", value: "New Birth Ministry (PL)" },
  { title: "Experience", value: "2 Semesters" },
  { title: "Shifts Completed", value: "17" },
  { title: "Shift Leader of the Week", value: "2 times" },
];

const PersonInfo = ({ tab }: { tab: number }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = 885;
    }
  }, [tab]);

  switch (tab) {
    case 0:
      return (
        <>
          <div className="col-span-12 rounded-lg bg-white shadow lg:col-span-6">
            <div className="border-b-[1px] border-solid border-alt-divider px-8 py-6 text-xl font-medium">
              Personal Details
            </div>
            {personalFields.map((field, index) => (
              <div
                key={field.title}
                className={`grid w-full grid-cols-12 px-8 py-4 ${
                  index != personalFields.length - 1 &&
                  "border-b-[1px] border-solid border-alt-divider"
                }`}
              >
                <div className="col-span-12 md:col-span-3 lg:col-span-12 xl:col-span-3">
                  {field.title}
                </div>
                <div className="col-span-12 text-text-secondary md:col-span-9 lg:col-span-12 xl:col-span-9">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 rounded-lg bg-white shadow lg:col-span-6">
            <div className="border-b-[1px] border-solid border-alt-divider px-8 py-6 text-xl font-medium">
              Organization Details
            </div>
            {organizationFields.map((field) => (
              <div
                key={field.title}
                className={`grid w-full grid-cols-12 border-b-[1px] border-solid border-alt-divider px-8 py-4`}
              >
                <div className="col-span-12 md:col-span-3 lg:col-span-12 xl:col-span-5">
                  {field.title}
                </div>
                <div className="col-span-12 text-text-secondary md:col-span-9 lg:col-span-12 xl:col-span-7">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    case 1:
      return (
        <div className="col-span-12  overflow-auto rounded-lg bg-white shadow">
          <AvailabilityCalendar />
        </div>
      );
    default:
      return <div>Error</div>;
  }
};

export default PersonInfo;
