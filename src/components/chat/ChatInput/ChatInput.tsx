import { useSetAtom } from "jotai";
import { messagesAtom } from "../../../store/messagesAtom";
import { FormEvent, useState } from "react";

// 추후에 디자인 시스템 인풋 컴포넌트 전환
const ChatInput = () => {
  const [value, setValue] = useState("");
  const setMessages = useSetAtom(messagesAtom);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessages((prevMessage) => [...prevMessage, value]);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default ChatInput;
