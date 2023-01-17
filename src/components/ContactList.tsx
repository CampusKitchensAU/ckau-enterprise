import { useState } from "react";
import FilterTabs from "../constants/contacts/FilterTabs";
import Tab from "./Tab";

const ContactList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div id="contact-list-wrapper">
      <div id="contact-list" className="w-full rounded-[20px] bg-white">
        <div
          id="filter-tabs"
          className="flex gap-4 h-12 items-end rounded-t-[20px] bg-surface-main px-4"
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
          className="h-[72px] border-t border-solid border-alt-divider"
        ></div>
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
