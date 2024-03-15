type Props = {
  onCancel: () => void;
};

const RoomFilterForm = ({ onCancel }: Props) => {
  const handleSubmit = () => {};
  return (
    <form>
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
      <div>
        <input type="radio" id="wait" name="progress" />
        <label htmlFor="wait">진행 전</label>
        <input type="radio" id="progress" name="progress" />
        <label htmlFor="progress">진행 중</label>
      </div>
      <div>
        <input type="radio" id="public" name="disclosure" />
        <label htmlFor="public">공개</label>
        <input type="radio" id="private" name="disclosure" />
        <label htmlFor="private">비공개</label>
      </div>
      <div>
        <button onClick={onCancel}>취소</button>
        <button onClick={handleSubmit}>적용</button>
      </div>
    </form>
  );
};

export default RoomFilterForm;
