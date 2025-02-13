const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Accessing a property that might not exist
  const city = data.address.city; 
  res.send({city});
});
app.listen(3000, () => console.log('Server is listening on port 3000'));