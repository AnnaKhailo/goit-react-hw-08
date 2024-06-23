import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import {
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success("User created!"))
      .catch(() => toast.error("Registration error!"));
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short! Min 3 symbols")
      .max(50, "Too Long! Max 50 symbols")
      .required("Required field!"),
    email: Yup.string()
      .email()
      .min(3, "Too Short! Minimum 3 symbols")
      .max(50, "Too Long! Max 50 symbols")
      .required("Required field!"),
    password: Yup.string()
      .min(6, "Too Short! Minimum 6 symbols")
      .max(50, "Too Long! Max 50 symbols")
      .required("Required field!"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={css.formRegister} autoComplete="off">
          <div className={css.fieldWrapper}>
            <label htmlFor={`${fieldId}-name`}>Username</label>
            <Field
              className={css.registerInput}
              type="text"
              name="name"
              id={`${fieldId}-name`}
            />
            <div className={css.icon}>
              <HiOutlineUser />
            </div>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor={`${fieldId}-email`}>Email</label>
            <Field
              className={css.registerInput}
              type="email"
              name="email"
              id={`${fieldId}-email`}
            />
            <div className={css.icon}>
              <HiOutlineMail />
            </div>
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor={`${fieldId}-password`}>Password</label>
            <Field
              className={css.registerInput}
              type="password"
              name="password"
              id={`${fieldId}-password`}
            />
            <div className={css.icon}>
              <HiOutlineLockClosed />
            </div>
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>
          <button type="submit" className={css.registerBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
