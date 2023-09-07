import { Outlet, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
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
