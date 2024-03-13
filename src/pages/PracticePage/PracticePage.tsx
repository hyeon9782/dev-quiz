import Container from "../../components/common/Container/Container";
import Header from "../../components/common/Header/Header";
import Timer from "../../components/quzi/Timer/Timer";
import { containerStyle } from "./PracticePage.style";

const PracticePage = () => {
  return (
    <Container>
      <div css={containerStyle}>
        <Header>연습하기</Header>
        <Timer />
      </div>
    </Container>
  );
};

export default PracticePage;
