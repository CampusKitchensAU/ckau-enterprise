import { type NextPage } from "next";
import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import ShiftsList from "../../components/ShiftsList";

const Shifts: NextPage = () => {
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
          <ShiftsList />
        </div>
      </div>
    </>
  );
};

export default Shifts;
