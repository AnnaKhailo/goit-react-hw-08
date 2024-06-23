import Modal from "react-modal";
import { useId } from "react";
import * as Yup from "yup";
import css from ".//ModalEditContact.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";

Modal.setAppElement("#root");

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Min 3 symbols")
    .max(50, "Too Long! Max 50 symbols")
    .required("Required field!"),
  number: Yup.string()
    .min(3, "Too Short! Minimum 3 symbols")
    .max(50, "Too Long! Max 50 symbols")
    .required("Required field!"),
});

export default function ModalEditContact({
  isOpen,
  onRequestClose,
  contact,
  onEditContact,
}) {
  const fieldId = useId();
  const initialValues = {
    name: contact.name,
    number: contact.number,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.editModal}
      overlayClassName={css.overlay}
    >
      <p>Edit your contact</p>
      <Formik
        initialValues={initialValues}
        onSubmit={onEditContact}
        validationSchema={ContactSchema}
      >
        <Form className={css.editContactForm}>
          <div className={css.inputContainer}>
            <label htmlFor={`${fieldId}-name`}>Name</label>
            <Field
              className={css.contactInput}
              type="text"
              name="name"
              id={`${fieldId}-name`}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={`${fieldId}-number`}>Number</label>
            <Field
              className={css.contactInput}
              type="tel"
              name="number"
              id={`${fieldId}-number`}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <div className={css.btnContainer}>
            <button className={css.saveBtn} type="submit">
              Save
            </button>
            <button className={css.cancelBtn} onClick={onRequestClose}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}
