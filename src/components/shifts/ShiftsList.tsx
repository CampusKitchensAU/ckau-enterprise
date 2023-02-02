import { useState } from "react";
import { MdFormatAlignLeft, MdGridView } from "react-icons/md";
import days from "../../constants/shifts/days";
import ShiftFilterTabs from "../../constants/shifts/ShiftFilterTabs";
import sortOptions from "../../constants/shifts/sortOptions";
import Search from "../Search";
import Select from "../Select";
import ShiftGridView from "./ShiftGridView";
import ShiftListView from "./ShiftListView";
import Tab from "../Tab";

const tempShiftData = [
  {
    id: 1,
    name: "Packaging at Lupton",
    type: 1,
    day: "Monday",
    time: "2:00 PM",
  },
  {
    id: 2,
    name: "New Birth Ministry",
    type: 2,
    day: "Friday",
    time: "6:30 PM",
  },
  {
    id: 3,
    name: "Student Center Starbucks",
    type: 0,
    day: "Friday",
    time: "4:30 PM",
  },
];

const ShiftsList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [gridView, setGridView] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg bg-white shadow">
        <div className="flex flex-col rounded-t-lg md:flex-row md:bg-surface-main">
          <div className="flex items-center gap-4 overflow-x-auto rounded-t-lg bg-surface-main px-4">
            {ShiftFilterTabs.map((tab, index) => (
              <Tab
                key={tab.title}
                title={tab.title}
                selected={selectedTab == index}
                index={index}
                callback={setSelectedTab}
              />
            ))}
          </div>
          <div className="flex md:grow md:justify-end md:py-2 md:pr-4">
            <button
              className={`transition-all duration-300 md:rounded-l-lg ${
                gridView
                  ? "bg-primary-500 text-primary-contrast"
                  : "grow bg-white text-gray-300 hover:text-gray-400 md:grow-0"
              } p-[6px]`}
              onClick={() => setGridView(true)}
            >
              <MdGridView fontSize={24} />
            </button>
            <button
              className={`text-center transition-all duration-300 md:rounded-r-lg ${
                gridView
                  ? "grow bg-white text-gray-300 hover:text-gray-400 md:grow-0"
                  : "bg-primary-500 text-primary-contrast"
              } p-[6px]`}
              onClick={() => setGridView(false)}
            >
              <MdFormatAlignLeft fontSize={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 border-t border-solid border-alt-divider p-4">
          <div className="col-span-12 lg:col-span-6 xl:col-span-8">
            <Search />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
            <Select title="Day" options={days} />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
            <Select title="Sort By" options={sortOptions} />
          </div>
        </div>
        {!gridView && <ShiftListView data={tempShiftData} />}
      </div>
      <div>{gridView && <ShiftGridView data={tempShiftData} />}</div>
    </div>
  );
};

export default ShiftsList;
