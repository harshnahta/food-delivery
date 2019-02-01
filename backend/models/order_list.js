const mongoose = require('mongoose');



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
    



    var  orderList= mongoose.model('orderList',order_list);
    module.exports={orderList};