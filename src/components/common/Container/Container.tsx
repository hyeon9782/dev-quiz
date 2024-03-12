import { containerStyle } from "./Container.style";
import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div css={containerStyle}>{children}</div>;
};

export default Container;
