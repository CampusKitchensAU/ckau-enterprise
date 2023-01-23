import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MdCalendarToday, MdNotificationsNone } from "react-icons/md";
import PageHeader from "../components/PageHeader";
import TrendLineGraph from "../components/TrendLineGraph";
import { trpc } from "../utils/trpc";

const tempTrendData = [
  { week: "Nov 11", pounds: 1200 },
  { week: "Nov 18", pounds: 1054.58 },
  { week: "Nov 25", pounds: 0 },
  { week: "Dec 02", pounds: 603.35 },
];

const getData = async () => {
  const res = await fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: `query{greetings}` }),
  });
  const data = await res.json();
  return data;
};

const Home: NextPage = () => {
  const [data, setData] = useState(null);
  const hello = trpc.hello.useQuery({ text: "from trpc" });
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
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
      <div className="flex h-full gap-6">
        <div className="flex grow flex-col gap-6">
          <PageHeader
            //TODO: Add a way to get the user's name and position
            title={"Good morning, Trevor!"}
            subtitle={"VP of Technology"}
          />
          <h3 className="w-full border-b-2 border-solid border-primary-900 text-xl font-semibold text-primary-900">
            Organization Statistics
          </h3>
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <TrendLineGraph data={tempTrendData} />
            </div>
          </div>
        </div>
        <div className="w-80 rounded-[20px] bg-surface-main px-8 py-4">
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

{
  /* <div>{hello.data?.greeting}</div>
<div>GraphQL example query: {JSON.stringify(data)}</div> */
}
