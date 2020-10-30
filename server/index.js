const express = require('express');
const app = express();
const port = 3012;
const ctrl = require('./controllers')

app.use(express.json())


//ADD ENDPOINTS











app.listen(port, () => console.log(`Server is listening on ${port}`))