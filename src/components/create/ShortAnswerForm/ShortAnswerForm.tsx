const ShortAnswerForm = () => {
  return (
    <form>
      <input type="text" placeholder="문제 내용을 입력해주세요." />
      <input type="text" placeholder="정답을 입력해주세요." />
      <div>
        <button>초기화</button>
        <button>생성</button>
      </div>
    </form>
  );
};

export default ShortAnswerForm;
