import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterContact = (event) => {
    dispatch(changeFilter(event.target.value.trim()));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchBoxTitle}>Find contacts by name or number</p>
      <input
        type="text"
        id={id}
        value={filter}
        onChange={handleFilterContact}
        placeholder="Search..."
      />
    </div>
  );
}
