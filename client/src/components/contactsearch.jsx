import { useState } from "react";

//special Thanks to Angel for sharing their Species form with me on GitHub as a reference for building my own form in this project
const ContactSearch = (props) => {
  //sets the state of multiple form fields at once
  const [contact, setContact]= useState({
    name: "",
  });

  //create functions that handle the event of the user typing into the form
  const handleName = (event) => {
    const name = event.target.value;
    console.log(name);
    setContact((contact) => ({ ...contact, name }));
  };

 //A function to handle the get request
 const getContact = (contact) => {
  return fetch("http://localhost:8080/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
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
console.log(getContact);
//using this to reset the form in react to blank after submit > setNewContact(emptyContact); in the handleSubmit
let emptyContact ={
  name: "",
}
const handleSubmit = (e) => {

  e.preventDefault();
  console.log("button is clicked");
  setContact(contact);
 getContact(contact);
  setContact(emptyContact);
};

  return (
    <div className="col-4">
      <h3>Search for Contact by Name</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
        <label>Name: 
        <input type="text" 
          placeholder="Add Name" 
          required
          value={contact.name}
          onChange={handleName}/>
        </label>

        </fieldset>
        <input type="submit" value="Submit" />
        
      </form>
      <div>
          <p>data goes here</p>
        </div>
    </div>
  );
};

export default ContactSearch;