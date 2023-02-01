import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavPages from "../constants/NavPages";
import NavButton from "./NavButton";

const NavRail = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    const index = NavPages.findIndex((page) => {
      return page.path == "/" + router.pathname.split("/")[1];
    });
    setSelected(index);
  }, [router.pathname]);

  return (
    <div className="flex min-w-[64px] flex-col rounded-r-[20px] bg-primary-500 pt-8 text-center text-primary-contrast lg:min-w-[80px]">
      <h1 className="h-16 text-base font-bold">CKAU</h1>
      {NavPages.map((page, index) => (
        <NavButton
          key={page.title}
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
