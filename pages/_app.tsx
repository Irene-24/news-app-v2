import type { AppProps } from "next/app";

import { Layout, NextProgress } from "../components";
import { wrapper } from "../redux/store";

import "../styles/globals.css";

if (process.env.NEXT_PUBLIC_ENABLE_API_MOCKING === "true") {
  require("../mocks");
}

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
