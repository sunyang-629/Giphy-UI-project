import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>trending</div>,
      },
      {
        path: "results",
        element: <div>search</div>,
      },
    ],
  },
]);

export default router;
