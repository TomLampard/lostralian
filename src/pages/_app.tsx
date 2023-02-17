import { type AppProps } from "next/app";
import type { NextPageWithAuthLayout } from "@utils/types";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import { Nunito, Open_Sans, EB_Garamond } from "@next/font/google";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-nunito",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-open-sans",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-eb-garamond",
});

type NextAppWithAuthLayout = AppProps & {
  Component: NextPageWithAuthLayout;
};

function LostralianApp({ Component, pageProps }: NextAppWithAuthLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider>
      <ThemeProvider>
        <div
          className={`${
            (nunito.variable, openSans.variable, ebGaramond.variable)
          }`}
        >
          {getLayout(<Component {...pageProps} />)}
          <Toaster />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default api.withTRPC(LostralianApp);
