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
        type:Image
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
    resprofileImage:{
        type:Image
    },
    itemName:{
        type:String,
        require:true
    },
    serviceType:{
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
cusEmail:{
    type:String,
    require:true
},
cusAddress:{
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
serviceType:{
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
paymentMode:{
    type:String
},
Status:{
    type:String,
    require:true
}
});


var custmer=mongoose.Schema({
    cusName:{
        type:String,
        require:true
    },
    cusAddress:{
        type:String,
        require:true
    },
    cusContact:{
        type:Number,
        require:true
    },
    cusPassword:{
        type:String,
        require:true
    },
    cusEmail:{
        type:String,
        require:true,
        unique:true
    },
    cusProfileimage:{
        type:Image
    }

});


res_list.methods.generateAuthToken = function () {
    var user = this;
    var token = jwt.sign({_id:user._id.toHexString()},'plcjs').toString();
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
var Customer = mongoose.model('Customer',custmer);
module.exports={resList,itemList,orderList,Customer};

