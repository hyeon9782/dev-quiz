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
    title,
    quizType,
    roomType,
    quizSecondaryTopic,
    currentPersonnel,
    quizPersonnel,
    quizStatus,
  } = room;
  return (
    <div css={roomItemStyle}>
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
