import { useNavigate } from "react-router-dom";
import {
  loginModalStyle,
  previewStyle,
  startButtonStyle,
} from "./StartButton.style";
import Modal from "../../common/Modal/Modal";
import useModal from "../../../hooks/useModal";
import KakaoButton from "../../auth/KakaoButton/KakaoButton";

// 추후에 디자인 시스템에 있는 Button 컴포넌트로 전환
const StartButton = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <button onClick={onOpen} css={startButtonStyle}>
        시작하기
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div css={loginModalStyle}>
          <KakaoButton />
          <div css={previewStyle} onClick={() => navigate("/main")}>
            체험하기
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StartButton;
