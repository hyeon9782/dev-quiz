import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MainPage from "../pages/MainPage/MainPage";
import RoomsPage from "../pages/RoomsPage/RoomsPage";
import RoomPage from "../pages/RoomPage/RoomPage";
import IntroPage from "../pages/IntroPage/IntroPage";
import PracticePage from "../pages/PracticePage/PracticePage";

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
              <IntroPage />
            </Suspense>
          ),
        },
        {
          path: "/main",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <MainPage />
            </Suspense>
          ),
        },
        {
          path: "/practice",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PracticePage />
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
