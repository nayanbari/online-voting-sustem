const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('online voting from router');
});

router.post('/register', async (req,res) => {
    const {name, email, phone, uid, pass, cpass} = req.body;
    
    if(!name || !email || !phone || !uid || !pass || !cpass){
        return res.status(422).json({error:"fill all details correctly"});
    }

    try{
        const userExist = await User.findOne({uid:uid})
        
        if (userExist) {
            return res.status(422).json({error:"User already exists"});}
        else if (pass != cpass){
            return res.status(422).json({error:"passwords are not matching"});
        }else{
        const user = new User({name, email, phone, uid, pass, cpass});

        await user.save();

        res.status(201).json({message:"user registered successfuly"});}       

    }catch(err){
        console.log(err);
    }
    
});

router.post('/login', async (req, res) => {
    try{
        const {uid, pass} = req.body;

        if(!uid || !pass){
            res.status(400).json({error:"field incomplete"});
        }

        const userLogin = await User.findOne({uid:uid});
        // console.log(userLogin);

        if(userLogin){
        const isMatch = await bcrypt.compare(pass, userLogin.pass);

        if(!isMatch){
            res.status(400).json({error:"user login unsuccesful"});
        }else{
            res.json({message:"user login succesful"});
        }}else{
            res.status(400).json({error:"user login unsuccesful"});
        }
        

    }catch (err) {
        console.log(err);
    }
})

module.exports = router;