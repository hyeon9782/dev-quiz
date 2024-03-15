import { IoCloseOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import {
  circleStyle,
  closeStyle,
  resultIconStyle,
  resultStyle,
} from "./Result.style";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

// 사라질 때 애니메이션 추가
const Result = ({ result }: { result: boolean }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return createPortal(
    isVisible && (
      <div css={resultStyle}>
        <div css={resultIconStyle}>
          {result ? (
            <FaRegCircle css={circleStyle} />
          ) : (
            <IoCloseOutline css={closeStyle} />
          )}
        </div>
      </div>
    ),
    document.body
  );
};

export default Result;
