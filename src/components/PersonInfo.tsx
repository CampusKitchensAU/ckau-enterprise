import { useEffect, useRef } from "react";
import { MdEdit } from "react-icons/md";

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
        <div className="col-span-12 flex h-full flex-col overflow-auto rounded-lg bg-white shadow">
          <header className="flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              <time dateTime="2022-01">Weekly Availability</time>
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
              {/** START DAYS HEADER */}
              <div className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
                {/** START MOBILE DAYS HEADER */}
                <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                  >
                    M
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                  >
                    T
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                  >
                    W
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                  >
                    T
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                  >
                    F
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                  >
                    S
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center pt-2 pb-3"
                  >
                    S
                  </button>
                </div>
                {/** END MOBILE DAYS HEADER */}
                <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
                  <div className="col-end-1 w-14" />
                  <div className="flex items-center justify-center py-3">
                    <span>Monday&apos;s</span>
                  </div>
                  <div className="flex items-center justify-center py-3">
                    <span>Tuesday&apos;s</span>
                  </div>
                  <div className="flex items-center justify-center py-3">
                    <span className="flex items-baseline">
                      Wednesday&apos;s
                    </span>
                  </div>
                  <div className="flex items-center justify-center py-3">
                    <span>Thursday&apos;s</span>
                  </div>
                  <div className="flex items-center justify-center py-3">
                    <span>Friday&apos;s</span>
                  </div>
                  <div className="flex items-center justify-center py-3">
                    <span>Saturday&apos;s</span>
                  </div>
                  <div className="flex items-center justify-center py-3">
                    <span>Sunday&apos;s</span>
                  </div>
                </div>
              </div>
              {/** END DAYS HEADER */}

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
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        12AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        1AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        2AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        3AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        4AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        5AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        6AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        7AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        8AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        9AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        10AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        11AM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        12PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        1PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        2PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        3PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        4PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        5PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        6PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        7PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        8PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        9PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        10PM
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        11PM
                      </div>
                    </div>
                    <div />
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
                  <ol
                    className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                    style={{
                      gridTemplateRows:
                        "1.75rem repeat(288, minmax(0, 1fr)) auto",
                    }}
                  >
                    <li
                      className="relative mt-px flex sm:col-start-3"
                      // starts at 2, every 12 is 1 hour: start/length
                      style={{ gridRow: "110 / span 48" }}
                    >
                      <div className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100">
                        <p className="order-1 font-semibold text-blue-700">
                          Available
                        </p>
                        <p className="text-blue-500 group-hover:text-blue-700">
                          <time dateTime="2022-01-12T06:00">9:00 AM</time>
                        </p>
                      </div>
                    </li>
                    <li
                      className="relative mt-px flex sm:col-start-5"
                      // starts at 2, every 12 is 1 hour: start/length
                      style={{ gridRow: "218 / span 12" }}
                    >
                      <div className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-orange-50 p-2 text-xs leading-5 hover:bg-orange-100">
                        <p className="order-1 font-semibold text-orange-700">
                          New Birth Ministry
                        </p>
                        <p className="order-1 text-orange-500 group-hover:text-orange-700">
                          Lupton Hall
                        </p>
                        <p className="text-orange-500 group-hover:text-orange-700">
                          <time dateTime="2022-01-12T06:00">6:00 PM</time>
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return <div>Error</div>;
  }
};

export default PersonInfo;
