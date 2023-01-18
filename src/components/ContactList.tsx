import { useState } from "react";
import FilterTabs from "../constants/contacts/FilterTabs";
import Roles from "../constants/contacts/Roles";
import SearchFilter from "./SearchFilter";
import Select from "./Select";
import Tab from "./Tab";

const ContactList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div id="contact-list-wrapper">
      <div id="contact-list" className="w-full rounded-[20px] bg-white">
        <div
          id="filter-tabs"
          className="flex h-12 items-end gap-4 rounded-t-[20px] bg-surface-main px-4"
        >
          {FilterTabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              selected={selectedTab == index}
              index={index}
              callback={setSelectedTab}
            />
          ))}
        </div>
        <div
          id="filters"
          className="grid grid-cols-12 gap-4 border-t border-solid border-alt-divider p-4"
        >
          <div className="col-span-3">
            <Select title="Roles" options={Roles} />
          </div>
          <div className="col-span-9">
            <SearchFilter />
          </div>
        </div>
        <div id="columns" className="h-10 bg-surface-main"></div>
        <div id="rows" className=""></div>
        <div
          id="list-footer"
          className="h-12 rounded-b-[20px] border-t border-solid border-alt-divider"
        ></div>
      </div>
    </div>
  );
};

export default ContactList;
