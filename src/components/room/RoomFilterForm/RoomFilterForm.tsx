import { useState } from "react";

type Props = {
  onCancel: () => void;
};

// react hook form + zod로 전환
const RoomFilterForm = ({ onCancel }: Props) => {
  const [formData, setFormData] = useState({
    quiz_primary_topic: "",
    quiz_secondary_topic: "",
    quiz_type: "전체",
    room_type: "전체",
    room_status: "전체",
    disclosure_status: "전체",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {};
  return (
    <form>
      <select
        name="quiz_primary_topic"
        onChange={handleChange}
        value={formData.quiz_primary_topic}
      >
        <option value="Front">Front</option>
      </select>
      <select
        name="quiz_secondary_topic"
        onChange={handleChange}
        value={formData.quiz_secondary_topic}
      >
        <option value="JavaScript">JavaScript</option>
      </select>
      <div>
        <label>
          <input
            type="radio"
            name="quiz_type"
            value="전체"
            checked={formData.quiz_type === "전체"}
            onChange={handleChange}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            name="quiz_type"
            value="객관식"
            checked={formData.quiz_type === "객관식"}
            onChange={handleChange}
          />
          객관식
        </label>
        <label>
          <input
            type="radio"
            name="quiz_type"
            value="주관식"
            checked={formData.quiz_type === "주관식"}
            onChange={handleChange}
          />
          주관식
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="room_type"
            value="전체"
            checked={formData.room_type === "전체"}
            onChange={handleChange}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            name="room_type"
            value="개인전"
            checked={formData.room_type === "개인전"}
            onChange={handleChange}
          />
          개인전
        </label>
        <label>
          <input
            type="radio"
            name="room_type"
            value="팀전"
            checked={formData.room_type === "팀전"}
            onChange={handleChange}
          />
          팀전
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="room_status"
            value="전체"
            checked={formData.room_status === "전체"}
            onChange={handleChange}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            name="room_status"
            value="진행전"
            checked={formData.room_status === "진행전"}
            onChange={handleChange}
          />
          진행전
        </label>
        <label>
          <input
            type="radio"
            name="room_status"
            value="진행중"
            checked={formData.room_status === "진행중"}
            onChange={handleChange}
          />
          진행 중
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="disclosure_status"
            value="전체"
            checked={formData.disclosure_status === "전체"}
            onChange={handleChange}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            name="disclosure_status"
            value="공개"
            checked={formData.disclosure_status === "공개"}
            onChange={handleChange}
          />
          공개
        </label>
        <label>
          <input
            type="radio"
            name="disclosure_status"
            value="비공개"
            checked={formData.disclosure_status === "비공개"}
            onChange={handleChange}
          />
          비공개
        </label>
      </div>
      <div>
        <button onClick={onCancel}>취소</button>
        <button onClick={handleSubmit}>적용</button>
      </div>
    </form>
  );
};

export default RoomFilterForm;
