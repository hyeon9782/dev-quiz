import { useNavigate } from "react-router-dom";
import {
  badgeBoxStyle,
  badgeStyle,
  roomItemStyle,
  titleStyle,
} from "./RoomItem.style";

type RoomItemProps = {
  room: {
    id: number;
    title: string;
    quizType: string;
    roomType: string;
    quizPrimaryTopic: string;
    quizSecondaryTopic: string;
    currentPersonnel: number;
    quizPersonnel: number;
    quizStatus: string;
    disclosureStatus: string;
  };
};

const RoomItem = ({ room }: RoomItemProps) => {
  const {
    id,
    title,
    quizType,
    roomType,
    quizSecondaryTopic,
    currentPersonnel,
    quizPersonnel,
    quizStatus,
  } = room;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/room/${id}`);
  };
  return (
    <div css={roomItemStyle} onClick={handleClick}>
      <div css={titleStyle}>{title}</div>
      <div css={badgeBoxStyle}>
        <div css={badgeStyle}>{quizType}</div>
        <div css={badgeStyle}>{roomType}</div>
        <div css={badgeStyle}>{quizSecondaryTopic}</div>
        <div css={badgeStyle}>{quizStatus}</div>
        <div>
          {currentPersonnel}/{quizPersonnel}
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
