import { useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import filterTabs from "../constants/contacts/filterTabs";
import roles from "../constants/contacts/roles";
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
          className="flex h-12 items-end gap-4 overflow-x-scroll sm2:overflow-auto rounded-t-[20px] bg-surface-main px-4"
        >
          {filterTabs.map((tab, index) => (
            <Tab
              key={tab.title}
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
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <Select title="Roles" options={roles} />
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <Search />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-surface-main">
                  <thead
                    id="columns"
                    className="font-medium text-text-secondary"
                  >
                    <tr className="min-w-full">
                      <th className=" min-w-[240px] px-4 py-3">
                        <button
                          className="flex cursor-pointer items-center gap-1 text-primary-900"
                          onClick={() => setAlphabeticalOrder((old) => !old)}
                        >
                          <div>Name</div>
                          <MdArrowUpward
                            fontSize={16}
                            className={`text-text-secondary ${
                              !alphabeticalOrder && "rotate-180"
                            } mt-[2px] transition-all`}
                          />
                        </button>
                      </th>
                      <th className="min-w-[240px] text-left">Role</th>
                      <th className="min-w-[240px] text-left">Position</th>
                      <th className="min-w-[240px] text-left">Shift</th>
                    </tr>
                  </thead>
                  <tbody id="rows" className="h-auto bg-white">
                    <ContactRow
                      name="Trevor Aupperle"
                      role="Executive Team"
                      position="VP of Technology"
                      shiftName="New Birth Ministry (PL)"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
