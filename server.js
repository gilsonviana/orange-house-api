const express = require('express');
const router = require('./v1/router');

const app = express();

app.use('/api/v1', router);

app.get('/', (req, res) => res.json({message: 'API entry starts at "/api/v1"'}));

app.listen(8080, () => console.log('server running...'));