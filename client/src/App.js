//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ContactList from './components/contactlist';
// import NewContact from './components/newcontact';

function App() {

  return (
    <div className="container">
      {/* <NewContact /> - I added this as as child of ContactList instead for bootstrap formatting reasons*/}

      <ContactList />
    </div>
  );
}

export default App;
