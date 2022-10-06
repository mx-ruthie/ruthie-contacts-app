import logo from './logo.svg';
import './App.css';
import ContactList from './components/contactlist';
// import NewContact from './components/newcontact';

function App() {
  return (
    <div className="container">
      {/* <NewContact /> */}
      <ContactList />
    </div>
  );
}

export default App;
