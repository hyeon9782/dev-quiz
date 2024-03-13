import { PropsWithChildren } from "react";
import {
  modalContentStyle,
  modalOverlayStyle,
  modalWrapperStyle,
} from "./Modal.style";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Modal = ({
  children,
  isOpen,
  onClose,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen && (
        <div css={modalWrapperStyle}>
          <div css={modalOverlayStyle} onClick={onClose}></div>
          <div css={modalContentStyle}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
