import type { NextPageWithLayout } from "@utils/types";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { LayoutSignIn } from "@components/Layout/layoutSignIn";
import { Button } from "@components/buttons/button";
import Div100vh from "react-div-100vh";

const SignIn: NextPageWithLayout = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    void router.push("/");
  }

  return (
    <>
      <Head>
        <title>Sign In - Lostralian.com</title>
      </Head>
      <Div100vh property="overflow-auto">
      <div className="text-tight font-serif text-5xl font-extrabold">
          <div className="flex items-center justify-center my-6">
          <span>🚀</span>
          </div>
          <span className="">Sign in</span>
        </div>
        <main className="re<lative bg-circle-grid dark:bg-circle-grid-dark flex h-full items-center justify-center bg-center">
          <div className="reative bottom-16">
            <div className="w-full space-y-4 bg-primary text-center">
              <div>
                <Button
                  variant="secondary"
                  responsive
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={() => signIn("google")}
                >
                  Sign in with Google
                </Button>
              </div>
              {/* <div>
            <Button
                variant="secondary"
                responsive
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => signIn("facebook")}
              >
                Sign in with Facebook
              </Button>
              </div>
              <div>
            <Button
                variant="secondary"
                responsive
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => signIn("instagram")}
              >
                Sign in with Instagram
              </Button>
              </div> */}
              <div>
                <Button
                  variant="secondary"
                  responsive
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={() => signIn("discord")}
                >
                  Sign in with Discord
                </Button>
              </div>
            </div>
          </div>
        </main>
      </Div100vh>
    </>
  );
};

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutSignIn>{page}</LayoutSignIn>;
};

export default SignIn;
