type Message = {
  username: string;
  country: string;
  text: string;
  timestemp: string;
  is_authenticated: boolean;
};

type Props = {
  message: Message;
  isYou: boolean;
};
const Message = ({ message, isYou }: Props) => {
  const countryCode =
    message.country && message.country !== "undefined"
      ? message.country.toLowerCase()
      : "";

  const { username, country, text, is_authenticated, timestamp } = message;

  return (
    <div>
      <div>{username}</div>
      <div>{text}</div>
      <div>{timestamp}</div>
    </div>
  );
};

export default Message;
