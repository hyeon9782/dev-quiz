import { useAppContext } from "../ChatApp/ChatApp";
import Message from "../Message/Message";

const Messages = () => {
  const { username, loadingInitial, error, getMessagesAndSubscribe, messages } =
    useAppContext();

  const reversed = [...messages].reverse();

  // Suspense로 전환
  if (loadingInitial) {
    return <div>Loading...</div>;
  }

  // ErrorBoundary로 전환
  if (error) {
    return (
      <div>
        <div>Error 발생</div>
        <button onClick={getMessagesAndSubscribe}> try to reconnect</button>
      </div>
    );
  }

  if (!messages.length) {
    return <div>No messages</div>;
  }

  return (
    <>
      {reversed.map((message) => {
        const isYou = message.username === username;
        return <Message key={message.id} message={message} isYou={isYou} />;
      })}
    </>
  );
};

export default Messages;
