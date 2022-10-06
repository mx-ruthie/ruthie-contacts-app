//import { useState, useEffect } from "react";

const NewContact = () => {
  return (
    <div className="col-4">
      <h3>Add New Contact</h3>
      <form>
        <label>Name: 
          <input type="text" placeholder="Add Name" />
        </label>
        <label>Email:  
          <input type="text" placeholder="Add Name" />
        </label>
        <label>Phone: 
          <input type="text" placeholder="Add Name" />
        </label>
        <label>Notes: 
          <input type="text" placeholder="Add Name" />
        </label>
        <input type="submit" value="Submit" />
        
      </form>
    </div>
  )
};

export default NewContact;