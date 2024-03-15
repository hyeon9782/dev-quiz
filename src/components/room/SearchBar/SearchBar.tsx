import { IoMenu } from "react-icons/io5";
import useModal from "../../../hooks/useModal";
import Modal from "../../common/Modal/Modal";
import RoomFilterForm from "../RoomFilterForm/RoomFilterForm";
const SearchBar = () => {
  const {
    isOpen: filterModalOpen,
    onOpen: onFilterModalOpen,
    onClose: onFilterModalClose,
  } = useModal();
  return (
    <form>
      <input type="text" placeholder="검색어를 입력해주세요." />
      <IoMenu onClick={onFilterModalOpen} />
      <Modal isOpen={filterModalOpen} onClose={onFilterModalClose}>
        <h1>방 필터</h1>
        <RoomFilterForm onCancel={onFilterModalClose} />
      </Modal>
    </form>
  );
};

export default SearchBar;
