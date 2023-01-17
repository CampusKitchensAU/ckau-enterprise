import { type NextPage } from "next";
import Head from "next/head";
import ContactList from "../components/ContactList";
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
        <ContactList/>
      </div>
    </>
  );
};

export default Contacts;
