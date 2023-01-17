import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
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
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full color-white flex min-h-screen flex-col items-center justify-center">
        <div>{hello.data?.greeting}</div>
        <div>GraphQL example query: {JSON.stringify(data)}</div>
      </main>
    </>
  );
};

export default Home;
