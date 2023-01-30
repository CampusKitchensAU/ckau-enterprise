import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import PageHeader from "../../components/PageHeader";

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
  summary: "Pick up food from New Birth Ministry and deliver to Lupton Hall.",
};

const secondaryValues = [
  { label: "Shift Type", value: "type" },
  { label: "Location", value: "location" },
  { label: "Required People", value: "slots" },
  { label: "Contact Name", value: "contactName" },
  { label: "Contact Phone", value: "contactPhone" },
];

const Shift: NextPage = () => {
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
              className="grow rounded-lg bg-white shadow"
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
            </div>
            <div
              id="shift-secondary"
              className="flex h-max w-96 flex-col gap-2 rounded-lg bg-white shadow"
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
                    <span className="text-text-secondary">
                      {tempData[value.value as keyof typeof tempData]}
                    </span>
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