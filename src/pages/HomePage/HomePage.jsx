import { TiContacts } from "react-icons/ti";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homeWrapper}>
      <h1 className={css.mainTitle}>Welcome to Personal Phonebook</h1>
      <TiContacts className={css.bookIcon} />
      <p>
        This user-friendly application provides secure storage of your contacts
      </p>
    </div>
  );
}
