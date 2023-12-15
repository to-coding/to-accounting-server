const express = require('express')
const app = express()
const port = 3001
const data = require('./_db/data.json');

// allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});


app.get('/home', (req, res) => {
  res.send('Hello, World!')
})

app.get('/records', (req, res) => {
  res.send(data.records)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
