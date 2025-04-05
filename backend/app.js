const express = require('express')
const app = express()
const port = 3000

let db = [];

app.use(express.json());

/* BASIC CRUD */

//READ-GET
app.get('/', (req, res) => {
  res.json(db);
})

//POST-CREATE
app.post('/', (req, res) => {
  db.push(req.body);
  res.json(db[db.length-1]);
})


//UPDATE-PUT
app.put('/:id', (req, res) => {
  db[Number(req.params.id)] = req.body;
  res.json(db[Number(req.params.id)]);
})


//DELETE-REMOVE
app.delete('/:id', (req, res) => {
  const deletedItems = db.splice(Number(req.params.id), 1);
  res.json(deletedItems);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

