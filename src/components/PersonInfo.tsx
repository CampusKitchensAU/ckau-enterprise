import { useEffect, useRef } from "react";

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
  const containerNav = useRef<HTMLDivElement>(null);
  const containerOffset = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMinute = new Date().getHours() * 60;
    if (container.current && containerNav.current && containerOffset.current) {
      container.current.scrollTop =
        ((container.current.scrollHeight -
          containerNav.current.offsetHeight -
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440;
    }
  }, []);

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
        <div className="col-span-12 flex h-full flex-col rounded-lg bg-white shadow overflow-auto">
          <header className="flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6"></header>
          <div
            ref={container}
            className="isolate flex flex-auto flex-col overflow-auto bg-white"
          >
            <div
              style={{ width: "165%" }}
              className="flex max-w-full flex-none flex-col sm:max-w-none lg:max-w-full"
            >
              {/** START DAYS HEADER */}
              <div
                ref={containerNav}
                className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
              >
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
                    <div ref={containerOffset} className="row-end-1 h-7"></div>
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
