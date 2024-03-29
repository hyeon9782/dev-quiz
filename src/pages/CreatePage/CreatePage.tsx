import Container from "../../components/layout/Container/Container";

import Tabs from "../../components/common/Tabs/Tabs";
import MultipleChoiceForm from "../../components/create/MultipleChoiceForm/MultipleChoiceForm";
import ShortAnswerForm from "../../components/create/ShortAnswerForm/ShortAnswerForm";
import Header from "../../components/layout/Header/Header";

const CreatePage = () => {
  return (
    <Container>
      <Header />
      <Tabs defaultTab="객관식">
        <Tabs.List>
          <Tabs.Trigger value="객관식">객관식</Tabs.Trigger>
          <Tabs.Trigger value="주관식">주관식</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="객관식">
          <MultipleChoiceForm />
        </Tabs.Content>
        <Tabs.Content value="주관식">
          <ShortAnswerForm />
        </Tabs.Content>
      </Tabs>
    </Container>
  );
};

export default CreatePage;
