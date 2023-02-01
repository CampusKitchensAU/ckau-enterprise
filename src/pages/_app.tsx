import { type AppType } from "next/app";
import { api } from "../utils/trpc";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import NavRail from "../components/NavRail";
import { useMediaQuery } from "../utils/useMediaQuery";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const isMobile = useMediaQuery("sm");

  return (
    <SessionProvider session={session}>
      <div className="flex h-max bg-surface-background">
        <NavRail />
        <main className="min-h-screen w-full px-8 pt-8">
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
