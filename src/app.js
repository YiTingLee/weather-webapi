const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/api/weather', (req, res) => {
  if (!req.query.apiKey || !req.query.apiKey2 || !req.query.address) {
    res.send({
      error: 'You must provide some arguments.'
    })
  }
  res.send({
    location: req.query.address
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
