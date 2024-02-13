import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constance/input";
import { v4 } from "uuid";
import styles from "./contacts.module.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");

  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const loginHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please eneter a valid data!");
      return;
    }
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
  };
  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(name)
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id != id);
    setContacts(newContacts);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* contact[input.name] be in mani ast ke be vizhegi az contact dastresi peyda mikonim
       ke name an ba input.name ham khani darad */}
        {
        
        
        inputs.map((input) => (
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
            key={input.id}
          />
        ))
        
        
        }
         <button className={styles.addbtn} onClick={loginHandler}>add contact</button>
      </div>

    
    
      {/* age chizi dakhel reshte bashe yani true age reshte khali bashe yani false */}
      <div className={styles.alert}>{alert ? <p>{alert} </p> : ""}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
