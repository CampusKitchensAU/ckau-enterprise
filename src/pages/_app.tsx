import { type AppType } from "next/app";
import { api } from "../utils/trpc";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        {router.pathname === "/setup" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/setup" />
      </SignedOut>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
