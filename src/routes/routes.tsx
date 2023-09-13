import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { FavouritePage, ResultPage, TrendingPage } from "../pages";
import { TrendingPageLoader } from "../pages/trending-page/trending-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TrendingPage />,
        //** I am be able to manage apis query by react-router, tanstack-query and RTK query  */
        loader: TrendingPageLoader,
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
