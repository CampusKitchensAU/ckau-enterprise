import { MdAssignment, MdHome, MdPerson } from "react-icons/md";

interface NavPage {
  title: string;
  path: string;
  icon: JSX.Element;
}

const NavPages: NavPage[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdHome fontSize={24} />,
  },
  {
    title: "Organization Shifts",
    path: "/shifts",
    icon: <MdAssignment fontSize={24} />,
  },
  {
    title: "Organization Contacts",
    path: "/contacts",
    icon: <MdPerson fontSize={24} />,
  },
];

export default NavPages;
