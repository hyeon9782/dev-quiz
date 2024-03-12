import { useNavigate } from "react-router-dom";
import Container from "../../components/common/Container/Container";
import {
  cardStyle,
  containerStyle,
  listStyle,
  titleStyle,
} from "./MainPage.style";

// 추후에 디자인 시스템 Card 컴포넌트로 전환
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div css={containerStyle}>
        <h1 css={titleStyle}>환영합니다! 현정호님!</h1>
        <div css={listStyle}>
          <div onClick={() => navigate("/practice")} css={cardStyle}>
            연습하기
          </div>
          <div onClick={() => navigate("/room")} css={cardStyle}>
            게임하기
          </div>
          <div onClick={() => navigate("/create")} css={cardStyle}>
            문제생성
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
