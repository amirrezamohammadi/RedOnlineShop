import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./custom.css";
import { api } from "./utils/api";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";

api.init();
const client = new QueryClient({ defaultOptions: { queries: { retry: 2 } } });

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
