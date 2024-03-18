import { useNavigate } from "react-router-dom";
import {
  badgeBoxStyle,
  badgeStyle,
  roomItemStyle,
  titleStyle,
} from "./RoomItem.style";
import { Room } from "../../../types";

type RoomItemProps = {
  room: Room;
};

const RoomItem = ({ room }: RoomItemProps) => {
  const {
    id,
    title,
    quiz_type,
    room_type,
    quiz_secondary_topic,
    current_personnel,
    maximum_personnel,
    room_status,
  } = room;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/room/waiting/${id}`);
  };
  return (
    <div css={roomItemStyle} onClick={handleClick}>
      <div css={titleStyle}>{title}</div>
      <div css={badgeBoxStyle}>
        <div css={badgeStyle}>{quiz_type}</div>
        <div css={badgeStyle}>{room_type}</div>
        <div css={badgeStyle}>{quiz_secondary_topic}</div>
        <div css={badgeStyle}>{room_status}</div>
        <div>
          {current_personnel}/{maximum_personnel}
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
