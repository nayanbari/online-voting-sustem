const mongoose = require('mongoose');

const DB = 'mongodb+srv://kartikrajput:kartikabc@vote.ztpki.mongodb.net/online_voting';

mongoose.connect(DB).then(()=>{
        console.log('connection successful');
    }).catch((err) => console.log('no connection'));
