import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/layout/Container/Container";
import Header from "../../components/layout/Header/Header";
import UserBox from "../../components/room/UserBox/UserBox";
import { userListStyle } from "./WaitingRoomPage.style";
import { AppContextProvider } from "../../components/chat/ChatApp/ChatApp";
import Messages from "../../components/chat/Messages/Messages";
import MessageForm from "../../components/chat/MessageForm/MessageForm";

export const users = [
  {
    id: 0,
    name: "현정호",
    image: "/",
  },
  {
    id: 1,
    name: "김보빈",
    image: "/",
  },
  {
    id: 2,
    name: "최재민",
    image: "/",
  },
  {
    id: 3,
    name: "남궁도혁",
    image: "/",
  },
  {
    id: 4,
    name: "김선재",
    image: "/",
  },
  {
    id: 5,
    name: "장승찬",
    image: "/",
  },
  {
    id: 6,
    name: "박정운",
    image: "/",
  },
  {
    id: 7,
    name: "전룡재",
    image: "/",
  },
];

const WaitingRoomPage = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  return (
    <AppContextProvider roomId={roomId}>
      <Container>
        <Header>{}</Header>
        <div css={userListStyle}>
          {users.map((user) => (
            <UserBox key={user.id} user={user} />
          ))}
        </div>
        <div>
          <button onClick={() => navigate(`/room/game/${roomId}`)}>
            시작하기
          </button>
        </div>
        {/* <ChatDisplay />
        <ChatInput /> */}
        <Messages />
        <MessageForm />
      </Container>
    </AppContextProvider>
  );
};

export default WaitingRoomPage;
