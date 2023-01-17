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
    title: "Shifts",
    path: "/shifts",
    icon: <MdAssignment fontSize={24} />,
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <MdPerson fontSize={24} />,
  },
];

export default NavPages;
