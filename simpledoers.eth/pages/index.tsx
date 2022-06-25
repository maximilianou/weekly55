import type { NextPage } from "next";
import Head from "next/head";
import SFooter from "../components/SFooter";
import SHeader from "../components/SHeader";
import SMain from "../components/SMain";

const Home: NextPage = () => {
  return (
    <>
      <div className="fixed right-0 bottom-0 min-w-full min-h-full" >
        <video src={'./video_apt_02.mp4'} 
               muted={true} autoPlay={true} loop={true}  
        />
      </div>
    <div className="fixed bottom-0 w-screen bg-[rgba(0,0,0,0.5)] text-slate-300 ">
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
    </>
  );
};

export default Home;
