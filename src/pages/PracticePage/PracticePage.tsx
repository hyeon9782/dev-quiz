import ChatDisplay from "../../components/chat/ChatDisplay/ChatDisplay";
import ChatInput from "../../components/chat/ChatInput/ChatInput";
import Container from "../../components/common/Container/Container";
import Header from "../../components/common/Header/Header";
import QuziBox from "../../components/quzi/QuziBox/QuziBox";
import { containerStyle } from "./PracticePage.style";

const PracticePage = () => {
  return (
    <Container>
      <div css={containerStyle}>
        <Header>연습하기</Header>
        <QuziBox />
        <ChatDisplay />
        <ChatInput />
      </div>
    </Container>
  );
};

export default PracticePage;
