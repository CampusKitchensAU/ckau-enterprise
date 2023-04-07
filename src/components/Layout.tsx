import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  MdAccountCircle,
  MdAssignment,
  MdClose,
  MdExpandMore,
  MdHome,
  MdMenu,
  MdNotificationsNone,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
import { useClerk, useUser } from "@clerk/nextjs";
import { FaIdBadge } from "react-icons/fa";
import { api } from "../utils/trpc";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();
  const dbUser = api.users.getUser.useQuery();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState([
    {
      name: "Dashboard",
      href: "/",
      icon: MdHome,
      current: true,
    },
    {
      name: "Shifts",
      href: "/shifts",
      icon: MdAssignment,
      current: false,
    },
    {
      name: "Contacts",
      href: "/contacts",
      icon: MdPerson,
      current: false,
    },
  ]);
  const greeting =
    new Date().getHours() < 12
      ? "Good morning"
      : new Date().getHours() < 18
      ? "Good afternoon"
      : "Good evening";

  useEffect(() => {
    setNavigation((navigation) =>
      navigation.map((item) => ({
        ...item,
        current: item.href === router.pathname,
      }))
    );
  }, [router.pathname]);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <MdClose
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        className="h-8 w-auto"
                        src="/logos/CKAU-Rect-Logo-White.png"
                        alt="The Campus Kitchen at Auburn University's Logo"
                        width={600}
                        height={600}
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-primary-600 text-white"
                                      : "text-primary-200 hover:bg-primary hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-primary-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-primary-200 hover:bg-primary-700 hover:text-white"
                          >
                            <MdSettings
                              className="h-6 w-6 shrink-0 text-primary-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col xl:w-72">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <Image
                className="h-8 w-auto"
                src="/logos/CKAU-Rect-Logo-White.png"
                alt="The Campus Kitchen at Auburn University's Logo"
                height={600}
                width={600}
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-primary-700 text-white"
                              : "text-primary-200 hover:bg-primary-700 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-primary-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-primary-200 hover:bg-primary-700 hover:text-white"
                  >
                    <MdSettings
                      className="h-6 w-6 shrink-0 text-primary-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-60 xl:pl-72">
          <div
            className={`sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 ${
              router.pathname == "/"
                ? "border-0 shadow-none"
                : "border-b shadow-sm"
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
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <MdNotificationsNone className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <MdAccountCircle className="h-8 w-8 text-gray-400" />
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
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {router.pathname === "/" && (
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div className="min-w-0 flex-1">
                    {/* Profile */}
                    <div className="flex items-center">
                      {dbUser.data?.image ? (
                        <Image
                          src={dbUser.data.image}
                          alt={"Profile picture of " + dbUser.data?.name}
                          className="hidden h-16 w-16 rounded-full sm:block"
                          width={64}
                          height={64}
                        />
                      ) : (
                        <MdAccountCircle className="hidden h-16 w-16 rounded-full text-primary sm:block" />
                      )}
                      <div>
                        <div className="flex items-center">
                          {dbUser.data?.image ? (
                            <Image
                              src={dbUser.data.image}
                              alt={"Profile picture of " + dbUser.data?.name}
                              className="h-16 w-16 rounded-full sm:hidden"
                              width={64}
                              height={64}
                            />
                          ) : (
                            <MdAccountCircle className="h-16 w-16 rounded-full text-primary sm:hidden" />
                          )}
                          {dbUser.data?.name ? (
                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                              {greeting + ", " + dbUser.data?.name}
                            </h1>
                          ) : (
                            <div className="ml-3 h-6 w-48 animate-pulse rounded bg-slate-200" />
                          )}
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt className="sr-only">Position</dt>
                          {dbUser.data?.title ? (
                            <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                              <FaIdBadge
                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              {dbUser.data?.title}
                            </dd>
                          ) : (
                            <div className="mt-1 h-4 w-32 animate-pulse rounded bg-slate-200" />
                          )}
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
