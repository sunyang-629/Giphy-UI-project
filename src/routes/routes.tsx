import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { ResultPage, TrendingPage } from "../pages";
import { TrendingPageLoader } from "../pages/trending-page/trending-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TrendingPage />,
        loader: TrendingPageLoader,
      },
      {
        path: "results",
        element: <ResultPage />,
      },
    ],
  },
]);

export default router;
