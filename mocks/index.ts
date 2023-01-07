import { setupWorker } from "msw";
import { setupServer } from "msw/node";

import { handlers } from "./handlers";

if (typeof window === "undefined") {
  const server = setupServer(...handlers);
  server.listen();
} else {
  const worker = setupWorker(...handlers);
  worker
    .start()
    .catch((error) => console.error("Error serving MSW worker: ", error));
}

export {};
