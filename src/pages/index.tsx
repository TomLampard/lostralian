import Head from "next/head";
import { Layout } from "../components/Layout";
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
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="justify-center gap-4 text-2xl font-semibold">
            Welcome to Lostralian.com
          </h2>
        </div>
      </main>
    </>
  );
};

Home.auth = true;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;