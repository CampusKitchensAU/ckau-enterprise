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
  switch (tab) {
    case 0:
      return (
        <>
          <div className="col-span-6 rounded-lg shadow">
            <div className="border-b-[1px] border-solid border-alt-divider px-8 py-6 text-xl font-medium">
              Personal Details
            </div>
            {personalFields.map((field, index) => (
              <div
                key={index}
                className={`grid w-full grid-cols-12 px-8 py-4 ${
                  index != personalFields.length - 1 &&
                  "border-b-[1px] border-solid border-alt-divider"
                }`}
              >
                <div className="col-span-3">{field.title}</div>
                <div className="col-span-9 text-text-secondary">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-6 rounded-lg shadow">
            <div className="border-b-[1px] border-solid border-alt-divider px-8 py-6 text-xl font-medium">
              Organization Details
            </div>
            {organizationFields.map((field, index) => (
              <div
                key={index}
                className={`grid w-full grid-cols-12 border-b-[1px] border-solid border-alt-divider px-8 py-4`}
              >
                <div className="col-span-5">{field.title}</div>
                <div className="col-span-7 text-text-secondary">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    case 1:
      return <div></div>;
    default:
      return <div>Error</div>;
  }
};

export default PersonInfo;
