import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import PageHeader from "../../components/PageHeader";
import PersonInfo from "../../components/PersonInfo";
import RoleChip from "../../components/RoleChip";
import Tab from "../../components/Tab";
import PersonTabs from "../../constants/contacts/personTabs";

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
      <div className="flex h-[calc(100vh_-_80px)] flex-col gap-6 sm:h-[calc(100vh_-_32px)]">
        <div className="hidden sm2:block">
          <PageHeader
            title="Organization Contacts"
            subtitle="Executive Team | Shift Leaders | Advisors"
          />
        </div>
        <div className="grow overflow-auto">
          <div
            id="content"
            className="flex h-full flex-col gap-6 pb-4 lg:px-12 xl:px-16"
          >
            <Link
              id="back-button"
              href="/contacts"
              className="flex cursor-pointer items-center gap-1 font-medium text-gray-600 transition-all duration-200 hover:text-primary-800 "
            >
              <MdArrowBack fontSize={24} className="py-[2px]" />
              <span>Contacts</span>
            </Link>

            <div id="contact-header" className="flex items-center gap-2">
              <div
                id="avatar"
                className="h-12 w-12 rounded-full bg-primary-500 md:h-14 md:w-14 lg:h-16 lg:w-16"
              ></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium sm2:text-xl md:text-2xl lg:text-3xl">
                  Trevor Aupperle
                </h3>
                <RoleChip role="VP of Technology" />
              </div>
            </div>

            <div
              id="Tabs"
              className="flex w-full gap-4 border-b-[1px] border-solid border-alt-divider"
            >
              {PersonTabs.map((tab, index) => (
                <Tab
                  key={tab.title}
                  title={tab.title}
                  selected={selectedTab == index}
                  index={index}
                  callback={setSelectedTab}
                />
              ))}
            </div>

            <div
              id="person-info"
              className="grid h-full w-full grid-cols-12 gap-6 overflow-auto pb-1 sm:pb-4"
            >
              <PersonInfo tab={selectedTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPerson;
