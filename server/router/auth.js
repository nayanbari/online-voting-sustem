const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require("../model/userSchema");
const Vote = require("../model/voteSchema");

router.post('/register', async (req,res) => {
    const {name, email, phone, uid, pass, cpass} = req.body;
    const voted = 0;

    if(!name || !email || !phone || !uid || !pass || !cpass){
        return res.status(420).json({error:"fill all details correctly"});
    }

    if(email.search("@")==-1 || !email.endsWith(".com") || pass.length <6 || phone.toString().length!=10 || uid.toString().length!=12) {
        return res.status(423).json({error:"fill all details correctly"});
    }

    try{
        const userExist = await User.findOne({uid:uid})
        
        if (userExist) {
            return res.status(421).json({error:"User already exists"});}
        else if (pass != cpass){
            return res.status(422).json({error:"passwords are not matching"});
        }else{
        const user = new User({name, email, phone, uid, pass, cpass, voted});

        await user.save();

        res.status(201).json({message:"user registered successfuly"});}       

    }catch(err){
        console.log(err);
    }
    
});

router.post('/login', async (req, res) => {
    try{
        let token;
        const {uid, pass} = req.body;

        if(!uid || !pass){
            res.status(400).json({error:"field incomplete"});
        }

        const userLogin = await User.findOne({uid:uid});
        // console.log(userLogin);

        if(userLogin){
        const isMatch = await bcrypt.compare(pass, userLogin.pass);
        token = await userLogin.generateAuthToken();
        // console.log(token);
        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 3000000),
            httpOnly:true
        });

        // console.log(req.Cookies.jwtoken);
        if(!isMatch){
            res.status(400).json({error:"user login unsuccesful"});
        }else{
            res.json({message:"user login succesful"});
        }}else{
            res.status(400).json({error:"user login unsuccesful"});
            // console.log("4001");
        }
        

    }catch (err) {
        console.log(err);
    }
});

router.post('/vote/:id', async (req,res) => {
    const {name, votes} = req.body;

    const token1 = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token1, "ONLINEVOTINGSYSTEMKKNONLINEVOTIN");
    const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token1 });

    if(rootUser.voted==0){

    if(!name || !votes){
        return res.status(420).json({error:"fill all details correctly"});
    }

    try{
        const voteExist = await Vote.findOne({name:name})
        
        if (voteExist) {
        // const vote = Vote({name, votes});
        
        const updateDoc = async (name1) => {
        try{
            const update = await Vote.updateOne({name:name1},{$set : {votes: (voteExist.votes+1)}});
            // console.log(update);
            const updateVoted = async (_id) => {
                try{
                    const update = await User.updateOne({_id},{$set : {voted: 1}});
                    // console.log(update);
                }catch (err) {
                    console.log(err);
                    return res.status(420).json({error:"voting failed"});
                }} 
                
            updateVoted(verifyToken._id);
        }catch (err) {
            console.log(err);
            return res.status(420).json({error:"voting failed"});
        }} 
        
        updateDoc(name);
            
        res.status(201).json({message:"vote registered successfuly 1 "});}

        else{
        const vote = new Vote({name, votes});

        await vote.save();

        res.status(201).json({message:"vote registered successfuly 2 "});}       

    }catch(err){
        console.log(err);
        return res.status(420).json({error:"voting failed"});
    }}
    else{
        return res.status(421).json({error:"already voted"});
    }
    
});

router.get('/result', async (req, res) => {
    const result = await Vote.find();
    // console.log(result);

    // for (const key in result){
    //     console.log(`${result[key].name} : ${result[key].votes}`);
    // }


    // console.log(result[0].name)

    if(result){
        res.json(result);
    }else{
        res.status(400).json({error:"result not found"});
    }
});

router.get("/logout", (req, res) => {
    console.log("Hello logout");
    res.clearCookie('jwtoken', { path: '/'});
    res.status(200).send('User Logged Out');
});

module.exports = router;