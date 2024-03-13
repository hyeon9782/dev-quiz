import { useAtomValue } from "jotai";
import { messagesAtom } from "../../../store/messagesAtom";
import { displayStyle } from "./ChatDisplay.style";

const ChatDisplay = () => {
  const messages = useAtomValue(messagesAtom);

  return (
    <div css={displayStyle}>
      {messages?.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default ChatDisplay;
