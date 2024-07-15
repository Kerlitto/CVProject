import App from "@/App";
import ListingsPage from "@/pages/ListingsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignInPage from "@/pages/SignInPage";
import WelcomePage from "@/pages/WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Route";
import ListingDetailsPage from "@/pages/ListingDetailsPage";
import ListingFavoritesPage from "@/pages/ListingFavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/signin",
        element: (
          <Route>
            <SignInPage />
          </Route>
        ),
      },
      {
        path: "/",
        element: (
          <Route isProtected>
            <WelcomePage />
          </Route>
        ),
      },
      {
        path: "/listings",
        element: (
          <Route isProtected>
            <ListingsPage />
          </Route>
        ),
      },
      {
        path: "/favorites",
        element: (
          <Route isProtected>
            <ListingFavoritesPage />
          </Route>
        ),
      },
      {
        path: "/listings/:listingId",
        element: (
          <Route isProtected>
            <ListingDetailsPage />
          </Route>
        ),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
