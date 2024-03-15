import { FormEvent } from "react";

// 추후에 디자인 시스템 Input으로 전환
// react hook form + zod 사용
const CreateForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("안녕");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="제목을 입력해주세요." />
        <select name="" id="">
          <option value="Front">Front</option>
        </select>
        <select name="" id="">
          <option value="JavaScript">JavaScript</option>
        </select>
        <div>
          <input type="radio" id="multiple_choice" name="quizType" />
          <label htmlFor="multiple_choice">객관식</label>
          <input type="radio" id="short_answer" name="quizType" />
          <label htmlFor="short_answer">주관식</label>
        </div>
        <div>
          <input type="radio" id="individual" name="roomType" />
          <label htmlFor="individual">개인전</label>
          <input type="radio" id="team" name="roomType" />
          <label htmlFor="team">팀전</label>
        </div>
        <input />
        <div>
          <input type="radio" id="public" name="disclosure" />
          <label htmlFor="public">공개</label>
          <input type="radio" id="private" name="disclosure" />
          <label htmlFor="private">비공개</label>
          <input type="password" />
        </div>
      </form>
      <div>
        <button>취소</button>
        <button onClick={handleSubmit}>생성</button>
      </div>
    </>
  );
};

export default CreateForm;
