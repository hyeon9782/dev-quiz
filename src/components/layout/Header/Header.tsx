import { IoIosArrowBack } from "react-icons/io";
import { PropsWithChildren } from "react";
import { headerStyle, leftArrowStyle, titleStyle } from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = ({
  children,
  onBack,
}: PropsWithChildren<{ onBack?: () => void }>) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };
  return (
    <header css={headerStyle}>
      <IoIosArrowBack css={leftArrowStyle} onClick={handleClick} />
      <span css={titleStyle}>{children}</span>
    </header>
  );
};

export default Header;
