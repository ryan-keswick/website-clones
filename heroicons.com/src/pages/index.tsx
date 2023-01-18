import { type NextPage } from "next";
import Head from "next/head";
import Hero from "@components/Hero";
import SearchBar from "@components/SearchBar";
import Icons from "@components/Icons";
import { useState } from "react";

const Home: NextPage = () => {
  const [filter, setFilter] = useState<string>("outline");
  const [search, setSearch] = useState<string>("");
  return (
    <div className="relative">
      <Head>
        <title>Heroicons</title>
        <meta name="description" content="Clone of heroicons.com" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <SearchBar {...{ filter, setFilter, setSearch }} />
      <Icons {...{ filter, search }} />
    </div>
  );
};

export default Home;
