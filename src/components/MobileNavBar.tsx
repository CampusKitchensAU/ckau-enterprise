import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import MobileNavMenu from "./MobileNavMenu";

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className={`fixed flex w-full flex-col ${isMenuOpen && "z-[1000]"}`}>
      <nav
        className={`flex h-12 w-full items-center bg-primary-500 text-white ${
          isMenuOpen && "border-b border-white"
        }"}`}
      >
        <button
          id="nav-menu-btn"
          className="p-3"
          onClick={() => setIsMenuOpen((old) => !old)}
        >
          {isMenuOpen ? <MdClose fontSize={24} /> : <MdMenu fontSize={24} />}
        </button>
        <h1 className="grow text-center text-lg">
          <Link href="/">CKAU</Link>
        </h1>
        <button id="profile-btn" className="h-12 w-12 p-[6px]">
          <div className="h-9 w-9 rounded-full bg-primary-700"></div>
        </button>
      </nav>
      {isMenuOpen && <MobileNavMenu callback={setIsMenuOpen} />}
    </div>
  );
};

export default MobileNavBar;
