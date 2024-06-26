import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "../globals.css";
import { ThemeProvider } from "./components/DarkTheme/ThemeProvider.tsx";
import store from "@/state/store.ts";
import Router from "./components/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
