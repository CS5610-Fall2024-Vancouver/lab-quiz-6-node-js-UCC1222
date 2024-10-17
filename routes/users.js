const express = require('express');
const router = express.Router();

let users = [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.json(user);
});

router.post('/', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.json(user);
});

router.delete('/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.json(user);
});
module.exports = router;