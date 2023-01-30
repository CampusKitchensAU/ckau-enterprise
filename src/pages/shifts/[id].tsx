import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import PageHeader from "../../components/PageHeader";

const Shift: NextPage = () => {
  //TODO: Fetch data for shift with id from URL

  return (
    <>
      <Head>
        <title>CKAU Enterprise | Shifts</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
      </Head>
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Organization Shifts"
          subtitle="Pickups | Packaging | Delivery"
        />
        <div id="content" className="px-16">
          <Link
            id="back-button"
            href="/shifts"
            className="flex cursor-pointer items-center gap-1 font-medium text-gray-600 transition-all duration-200 hover:text-primary-800 "
          >
            <MdArrowBack fontSize={24} className="py-[2px]" />
            <span>Shifts</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Shift;
