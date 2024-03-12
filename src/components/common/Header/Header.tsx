import { IoIosArrowBack } from "react-icons/io";
import { PropsWithChildren } from "react";
import { headerStyle, leftArrowStyle, titleStyle } from "./Header.style";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header css={headerStyle}>
      <IoIosArrowBack css={leftArrowStyle} />
      <span css={titleStyle}>{children}</span>
    </header>
  );
};

export default Header;
