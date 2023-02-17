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
            <h2 className="text-serif font-bold text-center tracking-tight text-3xl mb-2">Welcome to</h2>
          <div
            className="bg-cover bg-clip-text bg-center font-serif text-4xl font-extrabold uppercase tracking-tighter text-transparent antialiased sm:text-5xl md:text-7xl"
            style={{
              backgroundImage:
                "url(https://media3.giphy.com/media/minslOXFCUW3hdjwKp/giphy.gif)",
            }}
          >
          Lostralian.com
          </div>
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
