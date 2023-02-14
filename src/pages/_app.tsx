import { type AppProps } from "next/app";
import type { ReactNode } from "react";
import type { NextPageWithAuthLayout } from "src/utils/types";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "../utils/api";

import "../styles/globals.css";

type NextAppWithAuthLayout = AppProps & {
  Component: NextPageWithAuthLayout;
};

function LostralianApp({ Component, pageProps }: NextAppWithAuthLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default api.withTRPC(LostralianApp);

