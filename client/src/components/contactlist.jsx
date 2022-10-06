import { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  //retrieving the contacts data from my database
  const getContacts = () => {
    fetch("http://localhost:8080/api/contacts")
    .then ((res) => res.json())
    .then ((res) => {
      setContacts(res);
      console.log("this is res", res);
    });
  };

  useEffect(() => {
    getContacts();
    console.log("hey I'm running");
  
  }, []);
  return(
    <div className="contactTable" class="col-8">
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
  )
};

export default ContactList;