import Head from "next/head";
import Link from "next/link";

const ShiftSettings = () => {
  return (
    <>
      <Head>
        <title>Shift Settings | CKAU Enterprise</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Shift Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Create and manage shift settings such as shift times, shift
              leaders, and descriptions.
            </p>
          </div>
          <div className="ml-4 mt-4 flex-shrink-0">
            <Link
              href="/settings/shifts/create"
              className="relative inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create new shift
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShiftSettings;
