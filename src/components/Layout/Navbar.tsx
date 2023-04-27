import { type NextRouter } from "next/router";
import { MdMenu, MdNotificationsNone } from "react-icons/md";
import ProfileDropdown from "./ProfileDropdown";
import type { Dispatch, SetStateAction } from "react";
import type { UserResource } from '@clerk/types';

const Navbar = ({
  router,
  user,
  setSidebarOpen,
}: {
  router: NextRouter;
  user: UserResource | null | undefined;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 ${
        router.pathname == "/" ? "border-0 shadow-none" : "border-b shadow-sm"
      } border-gray-200 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8`}
    >
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MdMenu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="relative -m-2.5 flex p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <MdNotificationsNone className="h-6 w-6" aria-hidden="true" />
            {/* {!user?.profileComplete ? (
              <>
                <span className="absolute ml-6 inline-flex h-3 w-3 animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
              </>
            ) : null} */}
          </button>

          {/* Separator */}
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          />

          <ProfileDropdown user={user} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
