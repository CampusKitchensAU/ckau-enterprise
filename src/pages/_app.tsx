import { type AppType } from "next/app";
import { api } from "../utils/trpc";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import NavRail from "../components/NavRail";
import { useMediaQuery } from "../utils/useMediaQuery";
import MobileNavBar from "../components/MobileNavBar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const isMd = useMediaQuery("md");

  return (
    <SessionProvider session={session}>
      <div className="h-max w-screen bg-surface-background md:flex">
        {isMd ? <NavRail /> : <MobileNavBar />}
        <main className="min-h-screen w-full px-4 pt-16 sm1:px-6 sm2:px-8 md:-ml-20 md:grow md:pt-8 md:pl-28">
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
