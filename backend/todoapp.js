const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('ToDo backend is running!'));
app.listen(3000, () => console.log('Server running on port 3000'));
