import Container from "../../components/layout/Container/Container";
import RoomItem from "../../components/room/RoomItem/RoomItem";
import SearchBar from "../../components/room/SearchBar/SearchBar";
import { roomListStyle } from "./RoomsPage.style";
import CreateButton from "../../components/room/CreateButton/CreateButton";
import Modal from "../../components/common/Modal/Modal";
import CreateForm from "../../components/room/CreateRoomForm/CreateRommForm";
import useModal from "../../hooks/useModal";
import Header from "../../components/layout/Header/Header";

const list = [
  {
    id: 0, // 아이디
    title: "자바스크립트 개고수만 오셈", // 방 제목
    quizType: "객관식", // 객관식 or 주관식
    roomType: "개인전", // 개인전 or 팀전
    quizPrimaryTopic: "Front", // 1차 주제
    quizSecondaryTopic: "JavaScript", // 2차 주제
    currentPersonnel: 1, // 1 ~ 8
    quizPersonnel: 8, // 1 ~ 8
    quizStatus: "진행 전", // 진행 전 or 진행 중
    disclosureStatus: "public", // public or private
  },
  {
    id: 1, // 아이디
    title: "자바스크립트 개고수만 오셈 !!!", // 방 제목
    quizType: "객관식", // 객관식 or 주관식
    roomType: "개인전", // 개인전 or 팀전
    quizPrimaryTopic: "Front", // 1차 주제
    quizSecondaryTopic: "JavaScript", // 2차 주제
    currentPersonnel: 1, // 1 ~ 8
    quizPersonnel: 8, // 1 ~ 8
    quizStatus: "진행 전", // 진행 전 or 진행 중
    disclosureStatus: "public", // public or private
  },
  {
    id: 2, // 아이디
    title: "자바스크립트 개고수만 오셈 324", // 방 제목
    quizType: "객관식", // 객관식 or 주관식
    roomType: "개인전", // 개인전 or 팀전
    quizPrimaryTopic: "Front", // 1차 주제
    quizSecondaryTopic: "JavaScript", // 2차 주제
    currentPersonnel: 1, // 1 ~ 8
    quizPersonnel: 8, // 1 ~ 8
    quizStatus: "진행 전", // 진행 전 or 진행 중
    disclosureStatus: "public", // public or private
  },
];

const RoomsPage = () => {
  const {
    isOpen: createModalOpen,
    onOpen: onCreateModalOpen,
    onClose: onCreateModalClose,
  } = useModal();

  return (
    <>
      <Container>
        <Header>Rooms</Header>
        <CreateButton onOpen={onCreateModalOpen} />
        <SearchBar />

        <div css={roomListStyle}>
          {list.map((item) => (
            <RoomItem room={item} key={item.id} />
          ))}
        </div>
      </Container>
      <Modal isOpen={createModalOpen} onClose={onCreateModalClose}>
        <h1>방 만들기</h1>
        <CreateForm />
      </Modal>
    </>
  );
};

export default RoomsPage;
