import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import MainPage from "../pages/MainPage";
import RoomsPage from "../pages/RoomsPage";
import RoomPage from "../pages/RoomPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <MainPage />
            </Suspense>
          ),
        },
        {
          path: "/room",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <RoomsPage />
            </Suspense>
          ),
        },
        {
          path: "/room/:roomId",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <RoomPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;