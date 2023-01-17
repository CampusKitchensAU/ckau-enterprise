import { type NextPage } from "next";
import Head from "next/head";
import PageHeader from "../components/PageHeader";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>CKAU Enterprise | Contacts</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
      </Head>
      <div>
        <PageHeader
          title="Organization Contacts"
          subtitle="Executive Team | Shift Leaders | Advisors"
        />
      </div>
      <div id="content" className="px-16">
        <div id="contact-data-grid" className="w-full rounded-[20px] bg-white">
          <div
            id="filter-tabs"
            className="h-12 rounded-t-[20px] bg-surface-main"
          ></div>
          <div
            id="filters"
            className="h-[72px] border-t border-solid border-alt-divider"
          ></div>
          <div id="columns" className="h-10 bg-surface-main"></div>
          <div id="rows" className=""></div>
          <div
            id="list-footer"
            className="h-12 rounded-b-[20px] border-t border-solid border-alt-divider"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
