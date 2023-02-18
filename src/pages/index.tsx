import Head from "next/head";
import { LayoutUser } from "@components/Layout/layoutUser";
import type { NextPageWithAuthLayout } from "../utils/types";
import Div100vh from "react-div-100vh";

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
      <Div100vh>
        <div className="flex flex-col items-center">
            <h2 className="font-bold text-center tracking-tight text-3xl mb-2">Welcome to</h2>
          <h3 className="text-4xl font-extrabold text-primary uppercase tracking-tighter">
            Lostralian.com
          </h3>
          <div className="flex min-w-min max-w-sm flex-col items-center mt-6">
            <p className="text-center font-nunito text-xs font-extralight md:text-sm sm:text-xs ">
              The site is currently in development. <br />
              Keep an eye out here for updates, and some new heat available real
              soon!!
            </p>
          </div>
        </div>
      </Div100vh>
    </>
  );
};

Home.auth = true;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutUser>{page}</LayoutUser>;
};

export default Home;
