import { useNavigate } from "react-router-dom";
import Container from "../../components/layout/Container/Container";
import {
  homeButtonStyle,
  notFoundStyle,
  numberStyle,
} from "./NotFoundPage.style";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div css={notFoundStyle}>
        <div css={numberStyle}>404</div>
        <div>페이지를 찾을 수 없습니다.</div>
        <button css={homeButtonStyle} onClick={() => navigate("/")}>
          홈으로
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
