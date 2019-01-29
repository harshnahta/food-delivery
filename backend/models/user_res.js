const mongoose = require('mongoose');
const validator = require('validator');
const jwt=require('jsonwebtoken');
const _ = require('lodash');
const bcrypt=require('bcryptjs');



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
    serviceType:{
        type:String,
        require:true
    },
    res_userName :{
        type:String,
        unique:true
    },
    password:{
        type:String,
        minlenght:true,
        require:true
    },
    Tokens:{
        type:String
    }
});


var item_list=mongoose.Schema({
    resName: {
        type:String,
        require:true
    },
    itemName:{
        type:String,
        require:true
    },
    itemType:{
        type:String,
        require:true
    },
    quantity:{
        type:String,
        require:true
    },
    amount:{
        type:Number
    }

});


var order_list =mongoose.Schema({
cus_userName:{
    type:String,
    require:true
},
cus_Address:{
    type:String,
    require:true
},
resName:{
    type:String,
    require:true
},
resAddress:{
    type:String,
    require:true
},
itemName:{
    type:String,
    require:true
},
itemType:{
    type:String,
    require:true
},
quantity:{
    type:String,
    require:true
},
orderDate:{
    type:String,
    require:true
},
amount:{
    type:Number
},
mode:{
    type:String
},
Status:{
    type:String,
    require:true
}
});


res_list.methods.generateAuthToken = function () {
    var user = this;
    var token = jwt.sign({_id:user._id.toHexString()},'abc123').toString();
     user.tokens=token;
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
var  itemList= mongoose.model('itemList',item_list);
var  orderList= mongoose.model('orderList',order_list);
module.exports={resList,itemList,orderList};

