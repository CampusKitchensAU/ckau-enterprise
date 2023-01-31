import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import PageHeader from "../../components/PageHeader";
import ShiftInfo from "../../components/shifts/ShiftInfo";
import Tab from "../../components/Tab";
import ShiftTabs from "../../constants/shifts/ShiftTabs";

//TODO: Fetch data for shift with id from URL
const tempData: fullShiftData = {
  id: 1,
  name: "New Birth Ministry",
  day: "Friday",
  time: "6:30 pm",
  type: 2,
  location: "Lupton Hall",
  slots: 1,
  contactName: "Mr. Antravoski Brown",
  contactPhone: "(334) 413-3778",
  assignedIds: [1],
  summary:
    "For this delivery shift, New Birth Ministry will come to Lupton Hall to pick up the food. Since this shift occurs at the end of the week, we will give them all of our leftover food that would otherwise have to be thrown away.\n\nThis includes pickups from Starbucks, Panera Bread, and ABP. Any of this food should be given to them. Also, any extra food from any of the freezers or refrigerators should be given to them. This food is not resourced directly for them, but if we are extremely short on food, and none of these above items are available, please give them 3-4 pans each of proteins, carbs, and vegetables.\n\nThey should also be given any leftover vegetables from the Community Garden. They should be given approximately 2 pans each of proteins, carbs, and vegetables in addition to the fresh food they are given.",
};

const Shift: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [shiftType, setShiftType] = useState<string>("Pickup");
  const secondaryValues = [
    { label: "Shift Type", value: shiftType },
    { label: "Location", value: tempData.location },
    { label: "Required People", value: tempData.slots + " Shift Leaders" },
    { label: "Contact Name", value: tempData.contactName },
    { label: "Contact Phone", value: tempData.contactPhone },
  ];

  useEffect(() => {
    switch (tempData.type) {
      case 0:
        setShiftType("Pickup");
        break;
      case 1:
        setShiftType("Packaging");
        break;
      case 2 || 3:
        setShiftType("Delivery");
        break;
    }
  }, []);

  return (
    <>
      <Head>
        <title>CKAU Enterprise | Shifts</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
      </Head>
      <div className="flex flex-col gap-6 pb-6">
        <PageHeader
          title="Organization Shifts"
          subtitle="Pickups | Packaging | Delivery"
        />
        <div id="content" className="flex flex-col gap-6 px-16">
          <Link
            id="back-button"
            href="/shifts"
            className="flex cursor-pointer items-center gap-1 font-medium text-gray-600 transition-all duration-200 hover:text-primary-800 "
          >
            <MdArrowBack fontSize={24} className="py-[2px]" />
            <span>Shifts</span>
          </Link>
          <div className="flex gap-6">
            <div
              id="shift-container"
              className="h-max grow rounded-lg bg-white shadow"
            >
              <div
                id="shift-header"
                className="flex items-center gap-3 border-b border-solid border-alt-divider px-8 py-6"
              >
                <div
                  id="shift-icon"
                  className="h-10 w-10 rounded bg-alt-deliveryBlue"
                ></div>
                <div id="title-day-time" className="flex items-end gap-2">
                  <h3 className="text-xl font-semibold">{tempData.name}</h3>
                  <span className="text-xl font-medium">|</span>
                  <h4 className="text-text-secondary">
                    {tempData.day}&apos;s at {tempData.time}
                  </h4>
                </div>
              </div>
              <div
                id="shift-tabs"
                className="flex h-12 gap-3 border-b border-solid border-alt-divider px-8"
              >
                {ShiftTabs.map((tab, index) => (
                  <Tab
                    key={tab.title}
                    title={tab.title}
                    selected={selectedTab === index}
                    index={index}
                    callback={setSelectedTab}
                  />
                ))}
              </div>
              <div id="shift-info" className="px-8 pb-6 pt-4">
                <ShiftInfo tab={selectedTab} data={tempData} />
              </div>
            </div>
            <div
              id="shift-secondary"
              className=" flex h-max min-w-[320px] flex-col gap-2 rounded-lg bg-white shadow"
            >
              <div
                id="about"
                className="px-8 py-6 font-bold text-text-secondary"
              >
                About
              </div>
              <div className="flex flex-col gap-6 px-8">
                {secondaryValues.map((value) => (
                  <div key={value.label} className="flex flex-col gap-1">
                    <span>{value.label}</span>
                    <span className="text-text-secondary">{value.value}</span>
                  </div>
                ))}
                <hr />
              </div>
              <div
                id="about"
                className="px-8 pt-3 pb-4 font-bold text-text-secondary"
              >
                Assigned Shift Leaders
              </div>
              <div className="flex flex-col gap-4 px-8 pb-6">
                {/** TODO: Fetch user data for assignedIds */}
                <div className="flex items-center gap-4">
                  <div
                    id="user-avatar"
                    className="h-10 w-10 rounded-full bg-primary-500"
                  ></div>
                  <div id="name-title" className="flex flex-col gap-1">
                    <Link
                      href="/contacts/trevor-aupperle"
                      className="font-semibold underline-offset-2 hover:underline"
                    >
                      Trevor Aupperle
                    </Link>
                    <span className="text-text-secondary">
                      VP of Technology
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shift;
