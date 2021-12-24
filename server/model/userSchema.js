const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const dotenv = require("dotenv");
// dotenv.config({path:'./config.env'});

const userSchema = new mongoose.Schema({
    name:{
        type:String, required:true
    }, 
    email:{
        type:String, required:true
    }, 
    phone:{
        type:Number, required:true
    }, 
    uid:{
        type:Number, required:true
    }, 
    pass:{
        type:String, required:true
    }, 
    cpass:{
        type:String, required:true
    },
    voted:{
        type:Number, required:true
    },
    tokens:[
        {
            token: {
                type:String, required:true
            }
        }
    ]
})

userSchema.pre('save', async function(next) {
    if(this.isModified('pass')){
        // console.log("password hashed");
        this.pass = await bcrypt.hash(this.pass, 12);
        this.cpass = await bcrypt.hash(this.cpass, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, "ONLINEVOTINGSYSTEMKKNONLINEVOTIN");
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token; 
    }catch (err) {
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;