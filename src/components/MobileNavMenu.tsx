import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import NavPages from "../constants/NavPages";

const MobileNavMenu = ({
  callback,
}: {
  callback: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex h-screen w-full flex-col gap-3 bg-primary-500 px-12 py-4 text-white">
      {NavPages.map((page) => (
        <Link
          href={page.path}
          key={page.title}
          className="flex items-center gap-4 border-b border-white text-lg"
          onClick={() => callback(false)}
        >
          {page.icon}
          <span>{page.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNavMenu;
