import {
  imageStyle,
  rankStyle,
  rankingItemStyle,
  rankingListStyle,
} from "./Ranking.style";

const rankings = [
  {
    id: 0,
    name: "현정호",
    image: "",
  },
  {
    id: 1,
    name: "김보빈",
    image: "",
  },
  {
    id: 2,
    name: "장승찬",
    image: "",
  },
];

// 랭킹이 오르고 내릴 때 애니메이션 효과 주기
const Ranking = () => {
  return (
    <ul css={rankingListStyle}>
      {rankings.map((ranking, index) => (
        <li key={ranking.id} css={rankingItemStyle}>
          <div css={rankStyle}>{index + 1}등</div>
          <div css={imageStyle}></div>
          <div>{ranking.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default Ranking;
