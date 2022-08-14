import type { AppProps } from "next/app";

import { Layout, NextProgress } from "../components";
import { wrapper } from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
