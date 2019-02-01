const mongoose = require('mongoose');



var item_list=mongoose.Schema({
    resName: {
        type:String,
        require:true
    },
    resprofileImage:{
        type:String
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



var  itemList= mongoose.model('itemList',item_list);
module.exports={itemList};