import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Please log in</h2>
      <LoginForm />
    </div>
  );
}
