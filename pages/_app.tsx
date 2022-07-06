import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Layout, NextProgress } from "../components";
import { store, persistor } from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress />
      <Provider store={store}>
        <PersistGate loading={"Loading..."} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
