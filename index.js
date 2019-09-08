const express = require('express');
const app = express();
app.get('/', (req, rest) => {
  res.send('Raspberry hey')
});

app.listen(3000, () => console.log('Server running on port 3000'))
