import { userBoxStyle, userImageStyle, userNameStyle } from "./UserBox.style";

type User = {
  id: number;
  image: string;
  name: string;
};

const UserBox = ({ user }: { user: User }) => {
  return (
    <div css={userBoxStyle}>
      <div css={userImageStyle}></div>
      <div css={userNameStyle}>{user.name}</div>
    </div>
  );
};

export default UserBox;
