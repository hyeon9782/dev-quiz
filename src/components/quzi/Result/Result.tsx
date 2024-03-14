import { IoMdClose } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { resultStyle } from "./Result.style";
import { createPortal } from "react-dom";

const Result = ({ result }: { result: boolean }) => {
  return createPortal(
    <div css={resultStyle}>{result ? <FaRegCircle /> : <IoMdClose />}</div>,
    document.body
  );
};

export default Result;
