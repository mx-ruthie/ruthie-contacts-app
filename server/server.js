const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});

// create the get request
app.get('/api/contacts', cors(), async (req, res) => {
  try {
    const { rows: contacts } = await db.query('SELECT * FROM contacts');
    res.send(contacts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post('/api/contacts', cors(), async (req, res) => {
  console.log(req.body);
  //debugger
  const newContact = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    notes: req.body.notes,
  };
  console.log([newContact.name, newContact.email]);
  const result = await db.query(
    'INSERT INTO contacts(name, email, phone_number, notes) VALUES($1, $2, $3, $4) RETURNING *',
    [newContact.name, newContact.email, newContact.phone_number, newContact.notes],
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
