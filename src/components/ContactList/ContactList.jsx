import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
