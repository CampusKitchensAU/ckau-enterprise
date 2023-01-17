import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import NavRail from "../components/NavRail";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="flex h-max bg-surface-background">
        <NavRail />
        <main className="w-full px-8 pt-8 min-h-screen">
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
