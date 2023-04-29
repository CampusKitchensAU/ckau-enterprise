import { useEffect, useState } from "react";
import { MdHome, MdAssignment, MdPerson } from "react-icons/md";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import { useUser } from "@clerk/nextjs";

export type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  current: boolean;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState<NavigationItem[]>([
    {
      name: "Dashboard",
      href: "/",
      icon: MdHome,
      current: false,
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

  useEffect(() => {
    setNavigation((navigation) =>
      navigation.map((item) => ({
        ...item,
        current: item.href === "/" + router.pathname.split("/")[1],
      }))
    );
  }, [router.pathname]);

  return (
    <>
      <div>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
          router={router}
        />

        <DesktopSidebar navigation={navigation} router={router} />

        <div className="lg:pl-60 xl:pl-72">
          <Navbar router={router} user={user} setSidebarOpen={setSidebarOpen} />
          <main
            className={`bg-gray-100 ${
              router.pathname == "/"
                ? "min-h-[calc(100vh_-_177px)]"
                : "min-h-[calc(100vh_-_64px)]"
            }`}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
