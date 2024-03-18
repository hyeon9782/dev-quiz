import Container from "../../components/layout/Container/Container";
import RoomItem from "../../components/room/RoomItem/RoomItem";
import SearchBar from "../../components/room/SearchBar/SearchBar";
import { roomListStyle } from "./RoomsPage.style";
import CreateButton from "../../components/room/CreateButton/CreateButton";
import Modal from "../../components/common/Modal/Modal";
import CreateForm from "../../components/room/CreateRoomForm/CreateRommForm";
import useModal from "../../hooks/useModal";
import Header from "../../components/layout/Header/Header";
import { useEffect, useState } from "react";
import { supabase } from "../../libs/supabase";
import { Room } from "../../types";

const RoomsPage = () => {
  const {
    isOpen: createModalOpen,
    onOpen: onCreateModalOpen,
    onClose: onCreateModalClose,
  } = useModal();

  const [rooms, setRooms] = useState<Room[]>([]);

  const getRooms = async () => {
    const { data, error } = await supabase
      .from("room")
      .select()
      .order("id", { ascending: false });

    setRooms(data);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <Container>
        <Header>Rooms</Header>
        <CreateButton onOpen={onCreateModalOpen} />
        <SearchBar />

        <div css={roomListStyle}>
          {rooms.map((room) => (
            <RoomItem key={room.id} room={room} />
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
