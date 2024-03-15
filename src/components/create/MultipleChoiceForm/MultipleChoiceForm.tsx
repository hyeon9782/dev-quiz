import {
  optionInputStyle,
  optionListStyle,
  questionInputStyle,
} from "./MultipleChoiceForm.style";

const MultipleChoiceForm = () => {
  return (
    <>
      <form>
        <input
          css={questionInputStyle}
          type="text"
          placeholder="문제 내용을 입력해주세요."
        />
        <div css={optionListStyle}>
          <div>
            <input type="checkbox" id="number-1" />
            <label htmlFor="number-1">1번</label>
            <input
              css={optionInputStyle}
              type="text"
              placeholder="보기 내용을 입력해주세요."
            />
          </div>
          <div>
            <input type="checkbox" id="number-2" />
            <label htmlFor="number-2">2번</label>
            <input
              css={optionInputStyle}
              type="text"
              placeholder="보기 내용을 입력해주세요."
            />
          </div>
          <div>
            <input type="checkbox" id="number-3" />
            <label htmlFor="number-3">3번</label>
            <input
              css={optionInputStyle}
              type="text"
              placeholder="보기 내용을 입력해주세요."
              id="number-3"
            />
          </div>
          <div>
            <input type="checkbox" id="number-4" />
            <label htmlFor="number-4">4번</label>
            <input
              css={optionInputStyle}
              type="text"
              placeholder="보기 내용을 입력해주세요."
              id="number-4"
            />
          </div>
        </div>
      </form>
      <div>
        <button>초기화</button>
        <button>생성</button>
      </div>
    </>
  );
};

export default MultipleChoiceForm;
