import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { TrendingPage } from "../pages";

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
        element: <div>search</div>,
      },
    ],
  },
]);

export default router;
