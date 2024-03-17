import ChatDisplay from "../../chat/ChatDisplay/ChatDisplay";
import ChatInput from "../../chat/ChatInput/ChatInput";
import QuziBox from "../../quzi/QuziBox/QuziBox";
import Result from "../../quzi/Result/Result";

const PracticeArea = () => {
  return (
    <div>
      <QuziBox />
      <ChatDisplay />
      <ChatInput />
      {/* <Result result={true} /> */}
    </div>
  );
};

export default PracticeArea;
