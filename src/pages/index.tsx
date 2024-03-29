import { type NextPage } from "next";
import Head from "next/head";
import { MdCalendarToday, MdNotificationsNone } from "react-icons/md";
import PageHeader from "../components/PageHeader";
import TrendLineGraph from "../components/stats/TrendLineGraph";
import IconStat from "../components/stats/IconStat";
import Stat from "../components/stats/Stat";
import AvatarStat from "../components/stats/AvatarStat";
import { api } from "../utils/trpc";
import { calculateSmartsheetStats } from "../utils/calculateSmartsheetStats";
import { useMemo } from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";

const tempAvatarData = {
  name: "Most Shifts",
  avatar: <div className="h-10 w-10 rounded-full bg-primary-500"></div>,
  frame: "this week",
};

const Home: NextPage = () => {
  const { user } = useUser();
  console.log(user && user.emailAddresses.map((email) => email.emailAddress));

  const whitelist = api.auth.checkWhitelist.useQuery();

  console.log(whitelist);

  const { data } = api.smartsheet.sheets.getSheet.useQuery(634710310315908);
  const greeting =
    new Date().getHours() < 12
      ? "Good morning"
      : new Date().getHours() < 18
      ? "Good afternoon"
      : "Good evening";

  const statisticData = useMemo(() => calculateSmartsheetStats(data), [data]);
  if (!whitelist.data || whitelist.data?.length == 0) {
    return <div>Not whitelisted</div>;
  }
  return (
    <>
      <Head>
        <title>CKAU Enterprise | Dashboard</title>
        <meta
          name="description"
          content="Enterprise application for The Campus Kitchen at Auburn University"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full flex-col gap-6 pb-6 md:flex-row">
        <div className="flex grow flex-col gap-4 md:gap-6">
          <PageHeader
            //TODO: Add a way to get the user's name and position
            title={greeting + ", Guest"}
            subtitle={"VP of Technology"}
          />
          <div className="w-48 rounded-lg bg-primary-500 p-4 text-white">
            <SignOutButton />
          </div>
          <h3 className="w-full border-b-2 border-solid border-primary-900 font-semibold text-primary-900 sm2:text-lg md:text-xl">
            Organization Statistics
          </h3>
          <div className="grid grid-cols-12 gap-2">
            {statisticData.mainStats.map((stat, index) => (
              <div key={index} className="col-span-12 xl:col-span-4">
                <IconStat data={stat} />
              </div>
            ))}
            <div className="col-span-12 xl:col-span-7">
              <TrendLineGraph
                data={statisticData.fourWeekPickupTrend}
                prevVal={statisticData.fourWeekPickupTrend[0]?.pounds}
                curVal={statisticData.fourWeekPickupTrend[3]?.pounds}
              />
            </div>
            <div className="col-span-12 grid grid-cols-6 gap-2 xl:col-span-5">
              {statisticData.altStats.map((stat, index) => (
                <div key={index} className="col-span-6 sm1:col-span-3">
                  <Stat data={stat} />
                </div>
              ))}
              <div className="col-span-6 sm1:col-span-3">
                <AvatarStat data={tempAvatarData} />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-80 rounded-[20px] bg-surface-main px-8 py-4 lg:block">
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex grow items-center gap-4">
              <button className="cursor-default">
                <MdCalendarToday fontSize={32} />
              </button>
              <button className="cursor-default">
                <MdNotificationsNone fontSize={32} />
              </button>
            </div>
            {/*TODO: Get user photo or avatar */}
            <button
              id="avatar"
              className="h-10 w-10 rounded-full bg-primary-500"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
