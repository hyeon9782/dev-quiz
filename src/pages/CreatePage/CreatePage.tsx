import Container from "../../components/common/Container/Container";
import Header from "../../components/common/Header/Header";
import Tabs from "../../components/common/Tabs/Tabs";

const CreatePage = () => {
  return (
    <Container>
      <Header />
      <Tabs defaultTab="객관식">
        <Tabs.List>
          <Tabs.Trigger value="객관식">객관식</Tabs.Trigger>
          <Tabs.Trigger value="주관식">주관식</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="객관식">객관식 내용</Tabs.Content>
        <Tabs.Content value="주관식">주관식 내용</Tabs.Content>
      </Tabs>
    </Container>
  );
};

export default CreatePage;
