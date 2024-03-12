import Container from "../../components/common/Container/Container";
import Header from "../../components/common/Header/Header";
import { containerStyle } from "./PracticePage.style";

const PracticePage = () => {
  return (
    <Container>
      <div css={containerStyle}>
        <Header>연습하기</Header>
      </div>
    </Container>
  );
};

export default PracticePage;
