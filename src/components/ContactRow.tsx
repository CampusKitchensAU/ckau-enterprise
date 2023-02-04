import Link from "next/link";
import { MdMoreVert } from "react-icons/md";

//TODO: These should come from database
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
    <tr>
      <td id="name" className="flex items-center gap-3 py-3 px-4 font-medium">
        {/*TODO: Get user photo or avatar */}
        <div
          id="avatar"
          className="h-10 w-10 rounded-full bg-primary-500"
        ></div>
        {/*TODO: link name to contact/name onClick */}
        <Link
          href="/contacts/trevor-aupperle"
          className="underline-offset-2 hover:underline"
        >
          {name}
        </Link>
      </td>
      <td id="role">{role}</td>
      <td id="position">{position}</td>
      <td id="shift">{shiftName}</td>
      {/*TODO: Create menu for onClick of actions button */}
      <td id="actions" className="px-4">
        <button className="rounded-full p-2 text-text-secondary transition-all duration-200 hover:bg-gray-100">
          <MdMoreVert fontSize={24} />
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;
