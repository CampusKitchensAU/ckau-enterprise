import { useState } from "react";
import { MdFormatAlignLeft, MdGridView } from "react-icons/md";
import Days from "../constants/shifts/Days";
import ShiftFilterTabs from "../constants/shifts/ShiftFilterTabs";
import SortOptions from "../constants/shifts/SortOptions";
import Search from "./Search";
import Select from "./Select";
import Tab from "./Tab";

const ShiftsList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [gridView, setGridView] = useState<boolean>(true);

  return (
    <div className="rounded-lg bg-white shadow">
      <div className="flex h-12 items-center gap-4 rounded-t-lg bg-surface-main px-4">
        {ShiftFilterTabs.map((tab, index) => (
          <Tab
            key={index}
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
          <Select title="Day" options={Days} />
        </div>
        <div className="col-span-2">
          <Select title="Sort By" options={SortOptions} />
        </div>
      </div>
    </div>
  );
};

export default ShiftsList;
