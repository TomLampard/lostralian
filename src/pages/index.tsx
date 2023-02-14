import Head from "next/head";
import { LayoutPublic } from "../components/Layout/layoutPublic";
import type { NextPageWithAuthLayout } from "../utils/types";

const Home: NextPageWithAuthLayout = () => {

  return (
    <>
      <Head>
        <title>Lostralian.com | Home of Delta, The Lostralian</title>
        <meta
          name="description"
          content="The official home of Delta, The Lostralian"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center gap-12 h-96">
          <h2 className="font-garamond font-semibold text-4xl ">
            Welcome to <br /> Lostralian.com
          </h2>
          <div className="flex flex-col items-center justify-center w-86 ">
          <p className="font-roboto font-extralight">
            The official digital home of Delta, The Lostralian. <br />
            The Site is currently in development.<br/>
            <div>
              <p>
            Keep an eye out here for updates, and some new heat available soon.
            </p>
            </div>
          </p>
          </div>
        </div>
      </main>
    </>
  );
};

Home.auth = true;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutPublic>{page}</LayoutPublic>;
};

export default Home;