import { IoIosArrowBack } from "react-icons/io";
import { PropsWithChildren } from "react";
import { headerStyle, leftArrowStyle, titleStyle } from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <header css={headerStyle}>
      <IoIosArrowBack css={leftArrowStyle} onClick={() => navigate(-1)} />
      <span css={titleStyle}>{children}</span>
    </header>
  );
};

export default Header;
