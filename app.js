const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');

const port = 5000;

app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Movied app listening on port ${port}`));
