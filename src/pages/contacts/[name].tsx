import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import PageHeader from "../../components/PageHeader";
import PersonInfo from "../../components/PersonInfo";
import RoleChip from "../../components/RoleChip";
import Tab from "../../components/Tab";
import PersonTabs from "../../constants/contacts/PersonTabs";

const ContactPerson = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <Head>
        <title>CKAU Enterprise | Contacts</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
      </Head>
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Organization Contacts"
          subtitle="Executive Team | Shift Leaders | Advisors"
        />
        <div id="content" className="flex flex-col gap-6 px-16">
          <Link
            id="back-button"
            href="/contacts"
            className="flex cursor-pointer items-center gap-2 font-medium text-gray-600 transition-all duration-200 hover:text-primary-800 "
          >
            <MdArrowBack fontSize={20} className="mt-[2px]" />
            <span>Contacts</span>
          </Link>

          <div id="contact-header" className="flex gap-4">
            <div
              id="avatar"
              className="h-16 w-16 rounded-full bg-primary-500"
            ></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-medium">Trevor Aupperle</h3>
              <RoleChip role="VP of Technology" />
            </div>
          </div>

          <div
            id="Tabs"
            className="flex w-full gap-4 border-b-[1px] border-solid border-alt-divider"
          >
            {PersonTabs.map((tab, index) => (
              <Tab
                key={index}
                title={tab.title}
                selected={selectedTab == index}
                index={index}
                callback={setSelectedTab}
              />
            ))}
          </div>

          <div id="person-info" className="grid w-full grid-cols-12 gap-6">
            <PersonInfo tab={selectedTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPerson;
