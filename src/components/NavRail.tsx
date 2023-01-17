import { useState } from "react";
import NavPages from "../constants/NavPages";
import NavButton from "./NavButton";

const NavRail = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="flex w-[80px] flex-col rounded-r-[20px] bg-primary-500 pt-8 text-center text-primary-contrast">
      <h1 className="text-base font-bold h-16">CKAU</h1>
      {NavPages.map((page, index) => (
        <NavButton
          key={index}
          title={page.title}
          path={page.path}
          icon={page.icon}
          selected={selected == index}
          index={index}
          callback={setSelected}
        />
      ))}
    </div>
  );
};

export default NavRail;
