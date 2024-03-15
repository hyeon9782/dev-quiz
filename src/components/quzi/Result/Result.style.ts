import { css, keyframes } from "@emotion/react";

const flipScale = keyframes`
 0% {
    -webkit-transform: scale(1) rotateX(0);
            transform: scale(1) rotateX(0);
  }
  50% {
    -webkit-transform: scale(2.5) rotateX(-90deg);
            transform: scale(2.5) rotateX(-90deg);
  }
  100% {
    -webkit-transform: scale(1) rotateX(-180deg);
            transform: scale(1) rotateX(-180deg);
  }
`;

export const resultStyle = css({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const resultIconStyle = css({
  color: "gray",
  transformOrigin: "50% 50%",
  animation: `${flipScale} 0.5s linear both`,
});

export const closeStyle = css({
  fontSize: "30rem",
});

export const circleStyle = css({
  fontSize: "20rem",
});
