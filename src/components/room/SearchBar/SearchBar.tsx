import { IoMenu } from "react-icons/io5";
import useModal from "../../../hooks/useModal";
import Modal from "../../common/Modal/Modal";
import RoomFilterForm from "../RoomFilterForm/RoomFilterForm";
import { FormEvent, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { conditionAtom } from "../../../store/conditionAtom";
import { supabase } from "../../../libs/supabase";
import { roomAtom } from "../../../store/roomAtom";
const SearchBar = () => {
  const {
    isOpen: filterModalOpen,
    onOpen: onFilterModalOpen,
    onClose: onFilterModalClose,
  } = useModal();
  const [keyword, setKeyword] = useState("");

  const setRoom = useSetAtom(roomAtom);
  const condition = useAtomValue(conditionAtom);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(keyword);

    const { data, error } = await supabase
      .from("room")
      .select()
      .like("title", `%${keyword}%`)
      .order("id", { ascending: false });

    console.log(data);
    console.log(error);
    setRoom(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <IoMenu onClick={onFilterModalOpen} />
      <Modal isOpen={filterModalOpen} onClose={onFilterModalClose}>
        <h1>방 필터</h1>
        <RoomFilterForm onCancel={onFilterModalClose} />
      </Modal>
    </form>
  );
};

export default SearchBar;
