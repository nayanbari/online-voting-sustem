const express = require('express');
const app = express();

// const dotenv = require("dotenv");
// dotenv.config({path:'./config.env'});
// require("./db/conn");

app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT;

app.listen(4000, ()=>{
    console.log('server is running at port 4000');
});