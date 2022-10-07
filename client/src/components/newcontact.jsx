import { useState } from "react";
import ContactSearch from "./contactsearch";

//special Thanks to Angel for sharing their Species form with me on GitHub as a reference for building my own form in this project
const NewContact = (props) => {
  //sets the state of multiple form fields at once
  const [newContact, setNewContact]= useState({
    name: "",
    email: "",
    phone_number: "",
    notes: ""
  });

  //create functions that handle the event of the user typing into the form
  const handleName = (event) => {
    const name = event.target.value;
    console.log(name);
    setNewContact((newContact) => ({ ...newContact, name }));
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    console.log(email);
    setNewContact((newContact) => ({ ...newContact, email }));
  };

  const handlePhone = (event) => {
    const phone_number = event.target.value;
    console.log(phone_number);
    setNewContact((newContact) => ({ ...newContact, phone_number }));
  };

  const handleNotes = (event) => {
    const notes = event.target.value;
    console.log(notes);
    setNewContact((newContact) => ({ ...newContact, notes }));
  };
 //A function to handle the post request
 const postNewContact = (newContact) => {
  return fetch("http://localhost:8080/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newContact),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("From the post ", data);
      props.addContact(data);
      //callback, contactlist.jsx function addContact
    });
};
//using this to reset the form in react to blank after submit > setNewContact(emptyContact); in the handleSubmit
let emptyContact ={
  name: "",
  email: "",
  phone_number: "",
  notes: ""
}
const handleSubmit = (e) => {

  e.preventDefault();
  console.log("button is clicked");
  setNewContact(newContact);
  postNewContact(newContact);
  setNewContact(emptyContact);
};

  return (
    <div className="col-4">
      <h3>Add New Contact</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
        <label>Name: 
        <input type="text" 
          placeholder="Add Name" 
          required
          value={newContact.name}
          onChange={handleName}/>
        </label>
        <label>Email:  
          <input type="text" 
          placeholder="Add Name" 
          required
          value={newContact.email}
          onChange={handleEmail}/>
        </label>
        <label>Phone: 
        <input type="text" 
          placeholder="Add Phone Number" 
          required
          value={newContact.phone_number}
          onChange={handlePhone}/>
        </label>
        <label>Notes: 
          <input type="text" 
          placeholder="Additional Notes" 
          value={newContact.notes}
          onChange={handleNotes}/>
        </label>
        </fieldset>
        <input type="submit" value="Submit" />
        
      </form>
      <ContactSearch />
    </div>
  );
};

export default NewContact;