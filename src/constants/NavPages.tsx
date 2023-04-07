import { MdAssignment, MdHome, MdPerson } from "react-icons/md";

interface NavPage {
  name: string;
  href: string;
  icon: JSX.Element;
  current: boolean;
}

const NavPages: NavPage[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: <MdHome />,
    current: true,
  },
  {
    name: "Shifts",
    href: "/shifts",
    icon: <MdAssignment />,
    current: false,
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: <MdPerson />,
    current: false,
  },
];

export default NavPages;
