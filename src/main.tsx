import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Global, css } from "@emotion/react";

const quetyClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={quetyClient}>
      <Global
        styles={css`
          body {
            margin: 0;
            min-height: 100vh;
          }
        `}
      />
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
