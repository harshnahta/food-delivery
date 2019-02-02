var {mongoose}=require('./backend/db/db');
var {resList}=require('./backend/models/user_res');
var {Customer}=require('./backend/models/user_cus');
var {orderList}=require('./backend/models/order_list');
var {itemList}=require('./backend/models/item_list');
var express=require('express');
var app = express();
const _ =require('lodash');
// var multer = require('multer');
// var upload = multer();
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

app.use(function(req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin,x-auth, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Expose-Headers","x-auth");
    next();
});
app.use(bodyParser.json());

//restaurent register
app.post('/resUser',(req,res)=>{
    var body = _.pick(req.body,['resName','resAddress','serviceType','res_userName','password','resprofileImage']);
     var newRes = new resList(body);
     //console.log(newRes);
    newRes.save().then(()=>{
             console.log('token');
     return newRes.generateAuthToken();
     
 })
 .then((token)=>{
          res.header('x-auth',token).send(newRes);        
 })
 .catch((error)=>{
     res.status(404).send(error);
 }); 
 });


 //Restaurant Login
 app.post('/resLogin',(req,res)=>{
    var body = _.pick(req.body,['res_userName','password']);
   // console.log(body);
    resList.login(body.res_userName,body.password).then((user)=>{
          return user.generateAuthToken().then((token)=>{
              res.status(200).header('x-auth',token).json({
                  'status':true ,
                  'users' : user
              }); 
          });
      })
      .catch((err)=>{
          res.status(400).send();
      });
  });


//add Items and type restaurent
 app.post('/itemList',(req,res)=>{
    var body = _.pick(req.body,['res_userName','resprofileImage','itemName','serviceType','quantity','amount']);
        console.log(body);
     var newItem = new itemList(body);
    // console.log(newItem);
    newItem.save().then(()=>{
        console.log('saved');
 })
 .catch((error)=>{
     res.status(404).send(error);
 });
   
 });

//order place
 app.post('/order',(req,res)=>{
    var body = _.pick(req.body,['cusEmail','cusAddress','resName','resAddress','itemName','quantity','orderDate','amount','Status']);
     var newOrder = new orderList(body);
     //console.log(newOrder);
    newOrder.save().then(()=>{
             console.log('saved'); 
 })
 .catch((error)=>{
     res.status(404).send(error);
 });
   
 });

//  to find out res detail (type,name,items)
 app.post('/findresd',(req,res)=>{

    var body = _.pick(req.body,['res_userName']);
     //console.log(body.res_userName);
     itemList.find({serviceType : body.res_userName}).then((docs)=>{
         console.log(docs);
         res.send(docs);
        
     }).catch((err)=>{
         res.status(400).send(err);
     }) 
  
  });


 //Customer Registeration
 app.post('/registerCustomer',(req,res)=>{
     //console.log(res);
    var body = _.pick(req.body,['cusName','cusAddress',' cusGender','cusContact','cusEmail','cusPassword','cusProfileimage']);
     var newCus = new Customer(body);
    newCus.save().then(()=>{
             //console.log('saved');
     return newCus.generateAuthToken();   
 })
 .then((token)=>{
     res.header('x-auth',token).send(newCus);        
 })
 .catch((error)=>{
     res.status(404).send(error);
 }); 
 });

//customer login
 app.post('/cusLogin',(req,res)=>{
    var body = _.pick(req.body,['cusEmail','cusPassword']);
    Customer.login(body.cusEmail,body.cusPassword).then((user)=>{
          
          return user.generateAuthToken().then((token)=>{
              res.status(200).header('x-auth',token).json({
                  'status':true ,
                  'users' : user
              });
              
          });
      })
      .catch((err)=>{
          res.status(400).send();
      });
  
  });
  


 //FInd out History of orders res side
 app.get('/findresHistory',(req,res)=>{
     console.log("History Restaurant");
     console.log(req.query['updates']);
     console.log(JSON.parse(req.query['updates']).value);
    orderList.find( {resName : req.query['resName']}).then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.status(400).send(err);
    }) 
 });

 
 //FInd out items list 
 app.get('/finditemslist',(req,res)=>{
     console.log('find out item');
    console.log(req.query['res_userName']);

    itemList.find({res_userName: req.query['res_userName']}).then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.status(400).send(err);
    }) 
 });





 
  //FInd out customer Detail
  app.get('/findcustomer',(req,res)=>{
      console.log('customer detail');
      console.log(req.query['tokens']);
    Customer.find({tokens:req.query['tokens']}).then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.status(400).send(err);
    }) 
 });




let port = process.env.PORT || 3000;
  const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });