import { useState } from "react";

import Container from "../../components/layout/Container/Container";
import Header from "../../components/layout/Header/Header";
import QuestionTypeSelector from "../../components/practice/QuestionTypeSelector/QuestionTypeSelector";
import TopicSelector from "../../components/practice/TopicSelector/TopicSelector";

import { containerStyle } from "./PracticePage.style";
import { useNavigate } from "react-router-dom";
import PracticeArea from "../../components/practice/PracticeArea/PracticeArea";

type Step = "주제" | "문제유형" | "연습";

type SelectData = {
  topic: string;
  questionType: "객관식" | "주관식" | "";
};

const PracticePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("주제");
  const [selectedData, setSelectedData] = useState<SelectData>({
    topic: "",
    questionType: "",
  });

  const nextStep = () => {
    switch (step) {
      case "주제":
        setStep("문제유형");
        break;
      case "문제유형":
        setStep("연습");
        break;
    }
  };

  const prevStep = () => {
    switch (step) {
      case "주제":
        navigate(-1);
        break;
      case "문제유형":
        setStep("주제");
        break;
      case "연습":
        setStep("문제유형");
        break;
    }
  };

  const selectData = (key: string, value: string) => {
    setSelectedData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    nextStep();
  };
  return (
    <Container>
      <div css={containerStyle}>
        <Header onBack={prevStep}>연습하기</Header>
        {step === "문제유형" && <QuestionTypeSelector onSelect={selectData} />}
        {step === "주제" && <TopicSelector onSelect={selectData} />}
        {step === "연습" && <PracticeArea />}
      </div>
    </Container>
  );
};

export default PracticePage;
