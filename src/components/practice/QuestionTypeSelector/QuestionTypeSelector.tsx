import {
  multipleChoiceStyle,
  selectorBoxStyle,
  shortAnswerStyle,
} from "./QuestionTypeSelector.style";
type Props = {
  onSelect: (value: string) => void;
};
const QuestionTypeSelector = ({ onSelect }: Props) => {
  return (
    <div css={selectorBoxStyle}>
      <button css={multipleChoiceStyle} onClick={() => onSelect("객관식")}>
        객관식
      </button>
      <button css={shortAnswerStyle} onClick={() => onSelect("주관식")}>
        주관식
      </button>
    </div>
  );
};

export default QuestionTypeSelector;
