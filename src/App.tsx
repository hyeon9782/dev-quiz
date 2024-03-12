import { Outlet } from "react-router-dom";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            min-height: 100vh;
          }
        `}
      />
      <Outlet />
    </>
  );
}

export default App;
