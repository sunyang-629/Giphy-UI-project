import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { FavouritePage, ResultPage, TrendingPage } from "../pages";
// import { lazy } from "react";
// const LazyFavouritePage = lazy(() => import("../pages/favourite-page"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TrendingPage />,
      },
      {
        path: "results",
        element: <ResultPage />,
      },
      {
        path: "favourites",
        element: <FavouritePage />,
      },
    ],
  },
]);

export default router;
