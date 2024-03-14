import { IoCloseOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { resultIconStyle, resultStyle } from "./Result.style";
import { createPortal } from "react-dom";

const Result = ({ result }: { result: boolean }) => {
  return createPortal(
    <div css={resultStyle}>
      <div css={resultIconStyle}>
        {result ? <FaRegCircle /> : <IoCloseOutline />}
      </div>
    </div>,
    document.body
  );
};

export default Result;
