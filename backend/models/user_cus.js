const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const _ = require('lodash');
const bcrypt=require('bcryptjs');
// var FCM = require('fcm-node');
// var serverKey = 'AAAAHJgxk_M:APA91bE1LwKHCnfiviDZ03weXUqpH5KS4X4Rjam7wXtdgpkCydvfl7Z5M5KGr_FsYERW2sGma7lSc1MpwXCvIK-E92D0QgVm58Btg6gVxyv9CIMAT6Y-02JHa8IsyxuPgrlUnNdugEjB';


var custmer=mongoose.Schema({
    cusName:{
        type:String,
        require:true
    },
    cusAddress:{
        type:String,
        require:true
    },
    cusGender:{
        type:String,
        require:true
    },
    cusContact:{
        type:Number,
        require:true
    },
   
    cusEmail:{
        type:String,
        require:true,
        unique:true
    },
    cusPassword:{
        type:String,
        require:true
    },
    cusProfileimage:{
        type:String
    },
    tokens:{
        type:String
    }

});


custmer.methods.generateAuthToken = function () {
    var user = this;
   
    var token = jwt.sign({_id:user._id.toHexString()},'plcjs').toString();
    //var fcm =new FCM(serverKey); 
    user.tokens=token;
    //console.log(token);
    return user.save().then(()=>{
        return token;
    });
};


custmer.pre('save',function(next){
    var user=this;
    if(user.isModified('cusPassword')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.cusPassword,salt,(err,hash)=>{
                user.cusPassword=hash;
                next();
            });
        });
    }else{
        next();
    }      
});


custmer.statics.login = function(cusEmail,cusPassword){
    var User = this;
    return User.findOne({cusEmail}).then((user)=>{
        if(!user){
            return Promise.reject();
        }
        console.log('lower');
        return new Promise((resolve,reject)=>{
            bcrypt.compare(cusPassword,user.cusPassword,(err,result)=>{
                if(result){
                    resolve(user);
                }
                else{

                    reject();
                }
            });
        });
    })
    .catch((err)=>{
        return Promise.reject();
    });
};

var Customer = mongoose.model('Customer',custmer);
module.exports={Customer};