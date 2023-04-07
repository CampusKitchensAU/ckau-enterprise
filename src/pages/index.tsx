import { type NextPage } from "next";
import Head from "next/head";
import TrendLineGraph from "../components/stats/TrendLineGraph";
import TrendStat from "../components/stats/TrendStat";
import { api } from "../utils/trpc";
import { calculateSmartsheetStats } from "../utils/calculateSmartsheetStats";
import { useMemo } from "react";
import SimpleStat from "../components/stats/SimpleStat";

const Home: NextPage = () => {
  const whitelist = api.auth.checkWhitelist.useQuery();
  const { data, isLoading } =
    api.smartsheet.sheets.getSheet.useQuery(634710310315908);

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
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                2022 - 2023
              </h3>
              <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                {!isLoading
                  ? statisticData.mainStats.map((stat) => (
                      <div
                        key={stat.name}
                        className="bg-white px-4 py-5 sm:p-6"
                      >
                        <TrendStat data={stat} />
                      </div>
                    ))
                  : [1, 2, 3].map((_, index) => (
                      <div key={index} className="bg-white px-4 py-5 sm:p-6">
                        <TrendStat skeleton />
                      </div>
                    ))}
              </dl>
            </div>

            <div className="col-span-12 xl:col-span-7">
              {isLoading ? (
                <TrendLineGraph
                  data={statisticData.fourWeekPickupTrend}
                  skeleton
                />
              ) : (
                <TrendLineGraph data={statisticData.fourWeekPickupTrend} />
              )}
            </div>
            <div className="col-span-12 grid grid-cols-6 gap-2 xl:col-span-5">
              {!isLoading
                ? statisticData.altStats.map((stat, index) => (
                    <div
                      key={index}
                      className="col-span-6 rounded-lg sm1:col-span-3"
                    >
                      <SimpleStat data={stat} />
                    </div>
                  ))
                : [1, 2, 3].map((_, index) => (
                    <div
                      key={index}
                      className="col-span-6 rounded-lg sm1:col-span-3"
                    >
                      <SimpleStat skeleton />
                    </div>
                  ))}
            </div>
          </div>
        </div>
        {/* <div className="hidden w-80 rounded-[20px] bg-surface-main px-8 py-4 lg:block">
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex grow items-center gap-4">
              <button className="cursor-default">
                <MdCalendarToday fontSize={32} />
              </button>
              <button className="cursor-default">
                <MdNotificationsNone fontSize={32} />
              </button>
            </div>
            
            <button
              id="avatar"
              className="h-10 w-10 rounded-full bg-primary-500"
            ></button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
