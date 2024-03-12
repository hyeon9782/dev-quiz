import { useNavigate } from "react-router-dom";
import { startButtonStyle } from "./StartButton.style";

// 추후에 디자인 시스템에 있는 Button 컴포넌트로 전환
const StartButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/main")} css={startButtonStyle}>
      시작하기
    </button>
  );
};

export default StartButton;
