import type { NextPage } from "next";
import Head from "next/head";
import SFooter from "../components/SFooter";
import SHeader from "../components/SHeader";
import SMain from "../components/SMain";

const Home: NextPage = () => {
  return (
    <div className="bg-[#333] text-slate-300 w-screen h-screen">
      <Head>
        <title>Simple Doers</title>
        <meta
          name="description"
          content="typescript nodejs ens ipfs simpledoers.eth nextjs tailwind ethereum web3 "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SHeader />
     
      <SMain />
      <SFooter />
    </div>
  );
};

export default Home;
