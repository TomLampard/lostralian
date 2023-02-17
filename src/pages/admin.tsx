import Head from "next/head";
import { LayoutUser } from "@components/layout/layoutUser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { NextPageWithAuthLayout } from "../utils/types";
import Div100vh from "react-div-100vh";

const Home: NextPageWithAuthLayout = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Admin Only | Lostralian.com </title>
        <meta
          name="description"
          content="Admin access only. Lostralian.com admin page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Div100vh>
        <div className="flex h-52 flex-col items-center justify-center gap-6 md:h-96">
          <h2 className="max-w-lg text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Welcome to
            <br /> Lostralian.com
          </h2>
          <div className="flex min-w-min max-w-sm flex-col items-center justify-center">
            <p className="text-center font-nunito text-xs font-extralight md:text-sm">
              The site is currently in development. <br />
              Keep an eye out here for updates, and some new heat available real
              soon.
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