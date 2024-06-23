import { HiUser, HiPhone, HiTrash, HiPencilAlt } from "react-icons/hi";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import ModalDeleteContact from "../ModalDeleteContact/ModalDeleteContact";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import css from "./Contact.module.css";
import ModalEditContact from "../ModalEditContact/ModalEditContact";

export default function Contact({ data: { id, name, number } }) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Contact deleted!"))
      .catch(() => toast.error("Error!"));
  };

  const handleEditContact = (values) => {
    dispatch(editContact({ contactId: id, update: values }))
      .unwrap()
      .then(() => toast.success("Contact changed!"))
      .catch(() => toast.error("Error!"));
    setIsModalEditOpen(false);
  };

  const openModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };

  const openModalEdit = () => {
    setIsModalEditOpen(true);
  };

  const closeModalEdit = () => {
    setIsModalEditOpen(false);
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <div className={css.textWrapper}>
          <HiUser className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.textWrapper}>
          <HiPhone className={css.icon} />
          <p>{number}</p>
        </div>
      </div>
      <div className={css.btnWrapper}>
        <button className={css.editBtn} onClick={openModalEdit}>
          <HiPencilAlt className={css.iconDelete} />
        </button>
        <button className={css.deleteBtn} onClick={openModalDelete}>
          <HiTrash className={css.iconDelete} />
        </button>
      </div>
      {isModalEditOpen && (
        <ModalEditContact
          isOpen={isModalEditOpen}
          onRequestClose={closeModalEdit}
          contact={{ id, name, number }}
          onEditContact={handleEditContact}
        />
      )}
      {isModalDeleteOpen && (
        <ModalDeleteContact
          isOpen={isModalDeleteOpen}
          onRequestClose={closeModalDelete}
          onDeleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
}
