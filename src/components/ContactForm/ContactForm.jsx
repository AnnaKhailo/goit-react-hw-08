import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

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

export default function ContactForm() {
  const dispatch = useDispatch();

  const fieldId = useId();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => toast.success("Contact created!"))
      .catch(() => toast.error("Error!"));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
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

          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
