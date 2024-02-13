import styles from "./contactsItems.module.css";
const ContactItems = ({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) => {
  return (
    <ul className={styles.items}>
      <li>
        {name}
        {lastName}
      </li>
      <li>
        <span>📧</span>
        {email}
      </li>
      <li>
        <span>📞</span>
        {phone}
      </li>
      <button onClick={() => deleteHandler(id)}>🗑️</button>
    </ul>
  );
};
export default ContactItems;
