import Image from "next/image";
import { MdSettings } from "react-icons/md";
import { type NavigationItem } from ".";
import Link from "next/link";
import { type NextRouter } from "next/router";
import classNames from "../../utils/classNames";

const DesktopSidebar = ({
  navigation,
  router,
}: {
  navigation: NavigationItem[];
  router: NextRouter;
}) => {
  return (
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
                    <Link
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
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <Link
                href="/settings/account"
                className={classNames(
                  router.pathname.startsWith("/settings")
                    ? "bg-primary-700 text-white"
                    : "text-primary-200 hover:bg-primary-700 hover:text-white",
                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                )}
              >
                <MdSettings
                  className="h-6 w-6 shrink-0 text-primary-200 group-hover:text-white"
                  aria-hidden="true"
                />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default DesktopSidebar;
