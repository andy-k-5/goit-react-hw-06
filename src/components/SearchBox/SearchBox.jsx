import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const getFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setFilter(name));
  };

  return (
    <div className={css.conte}>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={getFilter} />
    </div>
  );
}
