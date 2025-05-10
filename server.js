'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hi User! This is a simple Node.js application running on Docker.\n A change was made to the code.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
