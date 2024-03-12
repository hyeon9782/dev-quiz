import Container from "../../components/common/Container/Container";
import StartButton from "../../components/intro/StartButton/StartButton";
import { descriptionStyle, titleStyle } from "./IntroPage.style";

const IntroPage = () => {
  return (
    <Container>
      <h1 css={titleStyle}>Dev Quiz</h1>
      <h3 css={descriptionStyle}>다양한 주제의 퀴즈로 즐겁게 공부해보세요!</h3>
      <StartButton />
    </Container>
  );
};

export default IntroPage;
