import { type NextPage } from "next";
import Head from "next/head";
import PageHeader from "../components/PageHeader";

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
      <div>
        <PageHeader title="Organization Shifts" subtitle="Pickups | Packaging | Delivery"/>
      </div>
    </>
  );
};

export default Shifts;
