import App from "@/App";
import ListingsPage from "@/pages/ListingsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignInPage from "@/pages/SignInPage";
import WelcomePage from "@/pages/WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/listings",
        element: <ListingsPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
