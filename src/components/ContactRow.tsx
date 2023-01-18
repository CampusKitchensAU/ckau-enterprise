import { MdMoreVert } from "react-icons/md";

type Role = "Executive Team" | "Shift Leader" | "Advisor";
type Position =
  | "President"
  | "VP of Operations"
  | "VP of Outreach"
  | "VP of Events"
  | "VP of Campus Relations"
  | "VP of Communications"
  | "VP of Finance"
  | "VP of Nutritional Programs"
  | "VP of Technology";

const ContactRow = ({
  name,
  role,
  position,
  shiftName,
}: {
  name: string;
  role: Role;
  position: Position;
  shiftName: string;
}) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div id="name" className="flex w-[240px] items-center gap-3 font-medium">
        {/*TODO: Get user photo or avatar */}
        <div
          id="avatar"
          className="h-10 w-10 rounded-full bg-primary-500"
        ></div>
        {/*TODO: link name to contact/name onClick */}
        <div className="cursor-pointer underline-offset-2 hover:underline">
          {name}
        </div>
      </div>
      <div id="role" className="w-[240px]">
        {role}
      </div>
      <div id="position" className="w-[240px]">
        {position}
      </div>
      <div id="shift" className="min-w-[304px] grow">
        {shiftName}
      </div>
      {/*TODO: Create menu for onClick of actions button */}
      <div
        id="actions"
        className="cursor-pointer rounded-full p-2 text-text-secondary transition-all duration-200 hover:bg-gray-100"
      >
        <MdMoreVert fontSize={24} />
      </div>
    </div>
  );
};

export default ContactRow;
