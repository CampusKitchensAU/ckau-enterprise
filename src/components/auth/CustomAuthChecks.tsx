import { SignOutButton } from "@clerk/nextjs";
import { api } from "../../utils/trpc";
import NewUser from "../NewUser";
import Image from "next/image";
import { CgSpinnerTwo } from "react-icons/cg";

const CustomAuthChecks = ({ children }: { children: React.ReactNode }) => {
  const whitelist = api.auth.checkWhitelist.useQuery();
  const newUser = api.auth.checkUserExits.useQuery();
  if (whitelist.isLoading || newUser.isLoading) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Image
            src="/logos/ckau-logo-rect-nobg.png"
            alt="CKAU Logo"
            width={200}
            height={200}
            className="mx-auto pb-4"
          />
          <h1 className="mt-4 flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            <CgSpinnerTwo className="animate-spin text-secondary-500" />
            Getting everything setup...
          </h1>
        </div>
      </main>
    );
  }
  if (!whitelist.data || whitelist.data?.length == 0) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Image
            src="/logos/ckau-logo-rect-nobg.png"
            alt="CKAU Logo"
            width={200}
            height={200}
            className="mx-auto pb-4"
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Unauthorized Access
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Sorry, you don&apos;t have access to this page. If you are a new
            member of The Campus Kitchen at Auburn University, please contact
            the organization&apos;s leadership team.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="rounded-md bg-secondary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500">
              <SignOutButton />
            </div>
            <a
              href="mailto:theckau@gmail.com"
              className="text-sm font-semibold text-gray-900"
            >
              Email team <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    );
  }
  if (!newUser.data) {
    return <NewUser />;
  }
  return <>{children}</>;
};

export default CustomAuthChecks;
