import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import NavTooltip from "./NavTooltip";

const NavButton = ({
  title,
  path,
  icon,
  selected,
  index,
  callback,
}: {
  title: string;
  path: string;
  icon: JSX.Element;
  selected: boolean;
  index: number;
  callback: Dispatch<SetStateAction<number>>;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <nav
        className="flex h-14 w-full cursor-pointer items-center justify-center"
        onClick={() => callback(index)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-tooltip-target="tooltip"
      >
        <div
          className={`group relative h-10 w-12 rounded-lg ${
            selected || isHovered ? "bg-primary-900" : "bg-inherit"
          } px-3 py-2`}
        >
          <Link href={path}>{icon}</Link>
          <NavTooltip title={title} />
        </div>
      </nav>
    </>
  );
};

export default NavButton;
