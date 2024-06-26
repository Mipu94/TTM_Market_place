import Head from "next/head";
import MainLayout from "../components/layout";
import { ThemeProvider } from "next-themes";
// GLOBAL STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fonts.sass";
import "../styles/global.sass";
import { Web3Provider } from "../store/web3Store";

import { SnackbarProvider } from "notistack";

// GLOBAL SCRIPTS

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TTM | TO THE MOON</title>
        <meta name="description" content="To The Moon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider defaultTheme={"dark"} enableSystem={false}>
        {/* <ToastContainer /> */}
        <Web3Provider>
          <SnackbarProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </SnackbarProvider>
        </Web3Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
