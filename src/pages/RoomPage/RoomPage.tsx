import ChatDisplay from "../../components/chat/ChatDisplay/ChatDisplay";
import ChatInput from "../../components/chat/ChatInput/ChatInput";
import Container from "../../components/layout/Container/Container";
import Header from "../../components/layout/Header/Header";
import UserBox from "../../components/room/UserBox/UserBox";
import { userListStyle } from "./RoomPage.style";

const users = [
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

const RoomPage = () => {
  return (
    <Container>
      <Header>자바스크립트 개고수만 오셈</Header>
      <div css={userListStyle}>
        {users.map((user) => (
          <UserBox key={user.id} user={user} />
        ))}
      </div>
      <ChatDisplay />
      <ChatInput />
    </Container>
  );
};

export default RoomPage;
