import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import "./reset.css";
import App from "./App";
import "antd/dist/antd.css";

import reportWebVitals from "./reportWebVitals";

//Context
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";

const queryClient = new QueryClient({
  defaultOptions: {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider>
          <AuthProvider>
            <BasketProvider>
              <App />
            </BasketProvider>
          </AuthProvider>
        </ChakraProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
