import { useState } from "react";
import { useAppContext } from "../ChatApp/ChatApp";
import { supabase } from "../../../libs/supabase";

const MessageForm = () => {
  const { username, country, session } = useAppContext();

  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    if (!message) return;

    setMessage("");
    try {
      const { error } = await supabase.from("messages").insert([
        {
          text: message,
          username,
          country,
          is_authenticated: session ? true : false,
        },
      ]);
      if (error) {
        console.error(error.message);
        return;
      }
      console.log("Sucsessfully sent!");
    } catch (error) {
      console.log("error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          maxLength={500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message"
          name="message"
        />
        <button disabled={!message || isSending} type="submit">
          전송
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
