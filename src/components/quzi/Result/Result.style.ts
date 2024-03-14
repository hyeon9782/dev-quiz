import { css } from "@emotion/react";
import { shake } from "../Timer/Timer.style";

export const resultStyle = css({
  fontSize: "18rem",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "gray",
  animation: `${shake} 1s linear`,
});
