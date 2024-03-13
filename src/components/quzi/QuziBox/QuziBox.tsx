import Timer from "../Timer/Timer";
import {
  exampleStyle,
  examplesStyle,
  quizBoxStyle,
  qustionStyle,
} from "./QuizBox.style";

const list = [
  "자바스크립트는 정적 타입 언어이다.",
  "자바스크립트는 동적 타입 언어이다.",
  "자바스크립트는 싱글 쓰레드이다.",
  "자바스크립트는 브라우저에서만 동작한다.",
];

const QuziBox = () => {
  return (
    <div css={quizBoxStyle}>
      <Timer />
      <div css={qustionStyle}>다음 자바스크립트에 대한 설명 중 틀린 것은?</div>
      <div css={examplesStyle}>
        {list.map((item, index) => (
          <div key={index} css={exampleStyle}>
            {index + 1}. {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuziBox;
