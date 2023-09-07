import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { TrendingPage } from "../pages";
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
        element: <div>search</div>,
      },
    ],
  },
]);

export default router;
