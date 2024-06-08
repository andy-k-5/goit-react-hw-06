import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
// import { useState } from "react";
// import contactsData from "../contactsData.json";
import "./App.module.css";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const saveContacts = localStorage.getItem("my-contacts");
  //   if (saveContacts !== null) {
  //     return JSON.parse(saveContacts);
  //   }
  //   return contactsData;
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("my-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const visibleContact = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
