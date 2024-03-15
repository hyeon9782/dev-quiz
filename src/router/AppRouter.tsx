import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MainPage from "../pages/MainPage/MainPage";
import RoomsPage from "../pages/RoomsPage/RoomsPage";
import IntroPage from "../pages/IntroPage/IntroPage";
import PracticePage from "../pages/PracticePage/PracticePage";
import CreatePage from "../pages/CreatePage/CreatePage";
import GameRoomPage from "../pages/GameRoomPage/GameRoomPage";
import WaitingRoomPage from "../pages/WaitingRoomPage/WaitingRoomPage";

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
          path: "/room/waiting/:roomId",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <WaitingRoomPage />
            </Suspense>
          ),
        },
        {
          path: "/room/game/:roomId",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <GameRoomPage />
            </Suspense>
          ),
        },
        {
          path: "/create",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CreatePage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
