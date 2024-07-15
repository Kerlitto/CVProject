import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "../globals.css";
import { ThemeProvider } from "./components/DarkTheme/ThemeProvider.tsx";
import store from "@/state/store.ts";
import Router from "./components/Router.tsx";
import AuthProvider from "./components/AuthProvider.tsx";
import { seedLocalDatabase } from "./api/data/seed.ts";

// Seeds the local storage with data simulating a database
seedLocalDatabase();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <Provider store={store}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Provider>
  </ThemeProvider>
);
