import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { trpc } from "../utils/trpc";

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
      <div>
        <PageHeader
          //TODO: Add a way to get the user's name and position
          title={"Good morning, Trevor!"}
          subtitle={"VP of Technology"}
        />

        <div>{hello.data?.greeting}</div>
        <div>GraphQL example query: {JSON.stringify(data)}</div>
      </div>
    </>
  );
};

export default Home;
