import Modal from "react-modal";
import css from "./ModalDeleteContact.module.css";

Modal.setAppElement("#root");

export default function ModalDeleteContact({
  isOpen,
  onRequestClose,
  onDeleteContact,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.deleteModal}
      overlayClassName={css.overlay}
    >
      <p className={css.text}>Are you sure you want to delete this contact?</p>
      <div className={css.btnWrapper}>
        <button onClick={onDeleteContact}>Yes</button>
        <button onClick={onRequestClose}>No</button>
      </div>
    </Modal>
  );
}
