import { useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import FilterTabs from "../constants/contacts/FilterTabs";
import Roles from "../constants/contacts/Roles";
import ContactRow from "./ContactRow";
import Search from "./Search";
import Select from "./Select";
import Tab from "./Tab";
import TableFooter from "./TableFooter";

const ContactList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState<boolean>(true);

  return (
    <div id="contact-list-wrapper">
      <div id="contact-list" className="w-full rounded-[20px] bg-white shadow">
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
            <Search />
          </div>
        </div>
        <div
          id="columns"
          className="flex h-10 items-center gap-4 bg-surface-main p-4 font-medium text-text-secondary"
        >
          <button
            className="flex w-[240px] cursor-pointer items-center gap-1 text-primary-900"
            onClick={() => setAlphabeticalOrder(!alphabeticalOrder)}
          >
            <div>Name</div>
            <MdArrowUpward
              fontSize={16}
              className={`text-text-secondary ${
                !alphabeticalOrder && "rotate-180"
              } mt-[2px] transition-all`}
            />
          </button>
          <div className="w-[240px]">Role</div>
          <div className="w-[240px]">Position</div>
          <div className="min-w-[304px] grow">Shift</div>
        </div>
        <div id="rows" className="h-auto">
          <ContactRow
            name="Trevor Aupperle"
            role="Executive Team"
            position="VP of Technology"
            shiftName="New Birth Ministry (PL)"
          />
        </div>
        <div
          id="list-footer"
          className="h-auto rounded-b-[20px] border-t border-solid border-alt-divider"
        >
          <TableFooter amount={55} />
        </div>
      </div>
    </div>
  );
};

export default ContactList;
