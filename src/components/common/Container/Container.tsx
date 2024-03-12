import { containerStyle } from "./Container.style";
import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <main css={containerStyle}>{children}</main>;
};

export default Container;
