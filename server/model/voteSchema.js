const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    name:{
        type:String, required:true
    }, 
    votes:{
        type:Number, required:true
    }
});

voteSchema.pre('save', async function(next) {
    if(this.isModified('votes')){
        this.votes = 1;
    }
    next();
});

const Vote = mongoose.model('VOTE', voteSchema);

module.exports = Vote;