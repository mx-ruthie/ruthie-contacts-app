import { useState, useEffect } from "react";
import NewContact from "./newcontact";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  //retrieving the contacts data from my database
  // const getContacts = () => {
  //   fetch("http://localhost:8080/api/contacts")
  //   .then ((res) => res.json())
  //   .then ((res) => {
  //     setContacts(res);
  //     console.log("this is res", res);
  //   });
  // };

  const addContact = (newContact) => {
    setContacts((contacts) => [...contacts, newContact]);
  };

  const getContacts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/contacts');
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setContacts(result);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getContacts();
  }, []);

  // useEffect(() => {
  //   getContacts();
  //   console.log("hey I'm running");
  
  // }, [contacts]);
  return(
    <div className="container">
      <div className="row">
    <NewContact addContact={addContact} contacts={contacts}/>

     <div className="col-8">
      <div>
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Notes</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
      {contacts.map((res, index) => {
        return(
        <tr key={index}>
          {/* the curly braces allow me to use JS inside html
           (like in the case below, it's calling the parameter directly and doing 
           JS magic on it, not directly printing*/}
          <th scope="row">{index+1}</th>
          <td>{res.name}</td>
          <td>{res.email}</td>
          <td>{res.phone_number}</td>
          <td>{res.notes}</td>
          <td>{res.created_on}</td>
        </tr>
        )
      })}

    
  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>
  )
};

export default ContactList;
