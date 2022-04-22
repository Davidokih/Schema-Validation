require("./config/db")
const express = require('express');
const port = 6000
const studRouter = require('./router/router')

const app = express();

app.use(express.json())
app.use('/', studRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});