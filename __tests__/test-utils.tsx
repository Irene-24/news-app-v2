import { ReactElement, ReactNode } from "react";

import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { makeStore } from "@/redux/store";

const renderWithProvider = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = makeStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  setupListeners(store.dispatch);

  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export { renderWithProvider, screen, render, makeStore, waitFor };
