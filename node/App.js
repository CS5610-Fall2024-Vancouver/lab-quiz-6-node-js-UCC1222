const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});