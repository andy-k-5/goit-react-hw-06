import { FaUserAlt } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/action";
import css from "./Contact.module.css";

export default function Contact({ data: { name, phone, id } }) {
  const dispatch = useDispatch();

  const handledDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contenar}>
      <div className={css.contData}>
        <p className={css.page}>
          <FaUserAlt className={css.iconUser} size="20" />
          {name}
        </p>
        <p className={css.page}>
          <ImPhone className={css.iconPhone} size="20" />
          {phone}
        </p>
      </div>
      <button className={css.btn} onClick={handledDelete}>
        Delete
      </button>
    </div>
  );
}
