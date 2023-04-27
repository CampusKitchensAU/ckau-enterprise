import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { MdAccountCircle, MdExpandMore } from "react-icons/md";
import type { UserResource } from "@clerk/types";
import classNames from "../../utils/classNames";
import { useClerk } from "@clerk/nextjs";

const ProfileDropdown = ({
  user,
}: {
  user: UserResource | null | undefined;
}) => {
  const { signOut } = useClerk();
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        {user?.profileImageUrl ? (
          <Image
            src={user.profileImageUrl || ""}
            alt="Profile picture"
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <MdAccountCircle className="h-8 w-8 text-gray-400" />
        )}
        <span className="hidden lg:flex lg:items-center">
          <span
            className="ml-4 text-sm font-semibold leading-6 text-gray-900"
            aria-hidden="true"
          >
            {user?.fullName || (
              <div className="h-2 animate-pulse rounded bg-slate-200" />
            )}
          </span>
          <MdExpandMore
            className="ml-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          <Menu.Item key={"sign-out"}>
            {({ active }) => (
              <button
                className={classNames(
                  active ? "bg-gray-50" : "",
                  "block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900"
                )}
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;
