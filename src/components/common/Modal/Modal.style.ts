import { css } from "@emotion/react";

export const modalWrapperStyle = css({});

export const modalOverlayStyle = css({
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 100,
  width: "100%",
  height: "100%",
});

export const modalContentStyle = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  zIndex: 101,
});
