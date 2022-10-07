import { useState, useEffect } from "react";

//special Thanks to Angel for sharing their Species form with me on GitHub as a reference for building my own form in this project
const ContactSearch = (props) => {
  //sets the state of multiple form fields at once
  const [oneResult, setOneResult] = useState({    name: "",
  email: "",
  phone_number: "",
  notes: ""});
  const [contact, setContact]= useState({
    name: "",
  email: "",
  phone_number: "",
  notes: ""
  });
  const [searchInput, setSearchInput] = useState("");

  //create functions that handle the event of the user typing into the form
  const handleName = (event) => {
    const name = event.target.value;
    console.log(name);
    setContact((contact) => ({ ...contact, name }));
    setSearchInput(name);
  };

 //A function to handle the get request
 const getContact = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/contacts');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    setContact(result);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  getContact();
}, []);
// console.log(getContact);
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
  console.log(searchInput);
  console.log(props.contacts);
  setOneResult(props.contacts.filter((oneContact) => oneContact.name === searchInput));
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
      <p>{oneResult.name === "" ? "" : oneResult[0].name}</p>
      <p>{oneResult.email === "" ? "" : oneResult[0].email}</p>
          <p>{oneResult.phone_number === "" ? "" : oneResult[0].phone_number}</p>
          <p>{oneResult.notes === "" ? "" : oneResult[0].notes}</p>
        </div>
    </div>
  );
};


export default ContactSearch;