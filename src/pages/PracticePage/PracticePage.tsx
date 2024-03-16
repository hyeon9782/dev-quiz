import ChatDisplay from "../../components/chat/ChatDisplay/ChatDisplay";
import ChatInput from "../../components/chat/ChatInput/ChatInput";
import Container from "../../components/layout/Container/Container";
import Header from "../../components/layout/Header/Header";
import QuestionTypeSelector from "../../components/practice/QuestionTypeSelector/QuestionTypeSelector";
import TopicSelector from "../../components/practice/TopicSelector/TopicSelector";

import QuziBox from "../../components/quzi/QuziBox/QuziBox";
import Result from "../../components/quzi/Result/Result";
import { containerStyle } from "./PracticePage.style";

const PracticePage = () => {
  return (
    <Container>
      <div css={containerStyle}>
        <Header>연습하기</Header>
        {/* <QuestionTypeSelector /> */}
        <TopicSelector />
        {/* <QuziBox />
        <ChatDisplay />
        <ChatInput />
        <Result result={true} /> */}
      </div>
    </Container>
  );
};

export default PracticePage;
