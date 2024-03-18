import { FormEvent, useState } from "react";
import { supabase } from "../../../libs/supabase";

// 추후에 디자인 시스템 Input으로 전환
// react hook form + zod 사용
const CreateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    quiz_type: "객관식",
    room_type: "개인전",
    quiz_primary_topic: "Front",
    quiz_secondary_topic: "JavaScript",
    current_personnel: 1,
    maximum_personnel: 8,
    room_status: "진행전",
    disclosure_status: "공개",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("room").insert(formData);

      if (error) {
        console.log(error.message);
        return;
      }
      console.log("성공");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
          value={formData.title}
          onChange={handleChange}
        />
        <select
          name="quiz_primary_topic"
          value={formData.quiz_primary_topic}
          onChange={handleChange}
        >
          <option value="Front">Front</option>
        </select>
        <select
          name="quiz_secondary_topic"
          value={formData.quiz_secondary_topic}
          onChange={handleChange}
        >
          <option value="JavaScript">JavaScript</option>
        </select>
        <div>
          <input
            type="radio"
            id="multiple_choice"
            name="quiz_type"
            value="객관식"
            checked={formData.quiz_type === "객관식"}
            onChange={handleChange}
          />
          <label htmlFor="multiple_choice">객관식</label>
          <input
            type="radio"
            id="short_answer"
            name="quiz_type"
            value="주관식"
            checked={formData.quiz_type === "주관식"}
            onChange={handleChange}
          />
          <label htmlFor="short_answer">주관식</label>
        </div>
        <div>
          <input
            type="radio"
            id="individual"
            name="room_type"
            value="개인전"
            checked={formData.room_type === "개인전"}
            onChange={handleChange}
          />
          <label htmlFor="individual">개인전</label>
          <input
            type="radio"
            id="team"
            name="room_type"
            value="팀전"
            checked={formData.room_type === "팀전"}
            onChange={handleChange}
          />
          <label htmlFor="team">팀전</label>
        </div>
        <input
          name="maximum_personnel"
          value={formData.maximum_personnel}
          onChange={handleChange}
          max={8}
        />
        <div>
          <input
            type="radio"
            id="public"
            name="disclosure_status"
            value="공개"
            checked={formData.disclosure_status === "공개"}
            onChange={handleChange}
          />
          <label htmlFor="public">공개</label>
          <input
            type="radio"
            id="private"
            name="disclosure_status"
            value="비공개"
            checked={formData.disclosure_status === "비공개"}
            onChange={handleChange}
          />
          <label htmlFor="private">비공개</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
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
