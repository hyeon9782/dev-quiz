import { css, keyframes } from "@emotion/react";

const progress = keyframes`
    0% { width: 100% }
  100% { width: 0 }
`;

export const shake = keyframes`
   0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const timerBoxStyle = css({
  position: "relative",
  width: "95%",
  height: "30px",
  backgroundColor: "blue",
  borderRadius: "10px 0 0 10px",
});

export const progressBarStyle = css({
  position: "absolute",
  top: "0",
  left: "0",
  height: "30px",
  backgroundColor: "red",
  borderRadius: "10px 0 0 10px",
  animation: `${progress} 10s linear`,
});

export const clockStyle = css({
  position: "absolute",
  top: "-12px",
  right: "-25px",
  fontSize: "3rem",
  color: "black",
  backgroundColor: "gray",
  padding: "5px",
  borderRadius: "9999px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${shake} 1s linear infinite`,
});
