const mongoose = require('mongoose');
//const validator = require('validator');
//const jwt=require('jsonwebtoken');
//const _ = require('lodash');
const bcrypt=require('bcryptjs');
var FCM = require('fcm-node');
var serverKey = 'YOURSERVERKEYHERE';



var res_list= mongoose.Schema({
    resName: {
        type:String,
        unique:true,
        require:true
    },
    resAddress:{
        type:String,
        require:true
    },
    resContact:{
        type:Number,
        require:true
    },
    serviceType:{
        type:String,
        require:true
    },
    res_userName :{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        minlenght:true,
        require:true
    },
    resprofileImage:{
        type:String
    },
    tokens:{
        type:String
    }
});

res_list.methods.generateAuthToken = function () {
    var user = this;
    //var token = jwt.sign({_id:user._id.toHexString()},'plcjs').toString();
    var fcm = new FCM(serverKey); 
    user.tokens=fcm;
    return user.save().then(()=>{
        return token;
    });
};


res_list.pre('save',function(next){
    var user=this;
    if(user.isModified('password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password=hash;
                next();
            });
        });
    }else{
        next();
    }      
});


var resList = mongoose.model('resList',res_list);



module.exports={resList};

