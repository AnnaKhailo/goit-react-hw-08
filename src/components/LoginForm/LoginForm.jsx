import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useId } from "react";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .catch(() => toast.error("Authorisation error!"));
    actions.resetForm();
  };

  const fieldId = useId();

  const UserSchema = Yup.object().shape({
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
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.formLogin}>
        <div className={css.fieldWrapper}>
          <label htmlFor={`${fieldId}-email`}>Email</label>
          <Field
            className={css.loginInput}
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
            className={css.loginInput}
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
        <button type="submit" className={css.loginBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
