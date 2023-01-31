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
        <div className="flex h-12 items-center gap-4 rounded-t-lg bg-surface-main px-4">
          {ShiftFilterTabs.map((tab, index) => (
            <Tab
              key={tab.title}
              title={tab.title}
              selected={selectedTab == index}
              index={index}
              callback={setSelectedTab}
            />
          ))}
          <div className="flex grow justify-end">
            <button
              className={`rounded-l-lg transition-all duration-200 ${
                gridView
                  ? "bg-primary-500 text-primary-contrast"
                  : "bg-white text-gray-300 hover:text-gray-400"
              } p-[6px]`}
              onClick={() => setGridView(true)}
            >
              <MdGridView fontSize={24} />
            </button>
            <button
              className={`rounded-r-lg transition-all duration-200 ${
                gridView
                  ? "bg-white text-gray-300 hover:text-gray-400"
                  : "bg-primary-500 text-primary-contrast"
              } p-[6px]`}
              onClick={() => setGridView(false)}
            >
              <MdFormatAlignLeft fontSize={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 border-t border-solid border-alt-divider p-4">
          <div className="col-span-8">
            <Search />
          </div>
          <div className="col-span-2">
            <Select title="Day" options={days} />
          </div>
          <div className="col-span-2">
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
