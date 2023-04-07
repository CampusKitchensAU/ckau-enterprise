import { type AppType } from "next/app";
import { api } from "../utils/trpc";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import "../styles/globals.css";
import CustomAuthChecks from "../components/auth/CustomAuthChecks";
import Layout from "../components/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <CustomAuthChecks>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomAuthChecks>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
