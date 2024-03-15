import ChatDisplay from "../../components/chat/ChatDisplay/ChatDisplay";
import ChatInput from "../../components/chat/ChatInput/ChatInput";
import Container from "../../components/layout/Container/Container";
import QuziBox from "../../components/quzi/QuziBox/QuziBox";
import Ranking from "../../components/room/Ranking/Ranking";
import UserBox from "../../components/room/UserBox/UserBox";
import { users } from "../WaitingRoomPage/WaitingRoomPage";
import { css } from "@emotion/react";

const [leftUsers, rightUsers] = users.reduce(
  (acc, user, idx) => {
    if (idx < 4) {
      acc[0].push(user);
    } else {
      acc[1].push(user);
    }
    return acc;
  },
  [[], []]
);

const GameRoomPage = () => {
  return (
    <Container>
      <div>
        <div css={css({ display: "flex", gap: "20px" })}>
          <div
            css={css({ display: "flex", flexDirection: "column", gap: "10px" })}
          >
            {leftUsers.map((user) => (
              <UserBox key={user.id} user={user} />
            ))}
          </div>
          <QuziBox />
          <div
            css={css({ display: "flex", flexDirection: "column", gap: "10px" })}
          >
            {rightUsers.map((user) => (
              <UserBox key={user.id} user={user} />
            ))}
          </div>
        </div>
        <div css={css({ display: "flex" })}>
          <div>
            <button>나가기</button>
          </div>
          <div>
            <ChatDisplay />
            <ChatInput />
          </div>
          <Ranking />
        </div>
      </div>
    </Container>
  );
};

export default GameRoomPage;
