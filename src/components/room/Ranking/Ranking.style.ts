import { css } from "@emotion/react";

export const rankingListStyle = css({
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const rankingItemStyle = css({
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "1.3rem",
  padding: "5px",
});

export const rankStyle = css({
  fontSize: "1.5rem",
});

export const imageStyle = css({
  borderRadius: "9999px",
  border: "1px solid black",
  width: "30px",
  height: "30px",
});
