import { type AppType } from "next/app";
import { api } from "../utils/trpc";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import "../styles/globals.css";
import NavRail from "../components/NavRail";
import MobileNavBar from "../components/MobileNavBar";
import CustomAuthChecks from "../components/auth/CustomAuthChecks";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <CustomAuthChecks>
          <div className="h-max w-screen bg-surface-background md:flex">
            <NavRail />
            <MobileNavBar />
            <main className="min-h-screen w-full px-4 pt-16 sm1:px-6 sm2:px-8 md:-ml-20 md:grow md:pt-8 md:pl-28">
              <Component {...pageProps} />
            </main>
          </div>
        </CustomAuthChecks>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
