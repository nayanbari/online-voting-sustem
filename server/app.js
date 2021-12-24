const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const authenticate = require('./middleware/authenticate');

// const dotenv = require("dotenv");
// dotenv.config({path:'./config.env'});
// require("./db/conn");

app.use(express.json());
app.use(require('./router/auth'));

app.listen(4000, ()=>{
    console.log('server is running at port 4000');
});

app.get('/vote/:id', authenticate, (req,res) => {
    // console.log("Hello v1oter");
    res.send(req.rootUser);
});