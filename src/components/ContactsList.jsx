import React from "react";
import ContactItems from "./ContactItems";
import styles from "./contactList.module.css";

function ContactsList({ contacts, deleteHandler }) {
  //baraye destructure kardan miaym on ghorme sabzie ro jaye props to parantez vorodi mizarim
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <div className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItems
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      ) : (
        <p className={styles.message}>No contact yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
