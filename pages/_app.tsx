import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { Layout, NextProgress } from "../components";
import { store } from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
