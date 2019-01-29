var {mongoose}=require('./backend/db/db');
var {resList,itemList,orderList,Customer}=require('./backend/models/user_res');
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
    var body = _.pick(req.body,['resName','resAddress','serviceType','userName','password']);
     var newRes = new resList(body);
     //console.log(newRes);
    newRes.save().then(()=>{
             //console.log('saved');
     return newRes.generateAuthToken();
     
 })
 .then((token)=>{
     res.header('x-auth',token).send(newUser);        
 })
 .catch((error)=>{
     res.status(404).send(error);
 }); 
 });

//Items and type restaurent
 app.post('/itemList',(req,res)=>{
    var body = _.pick(req.body,['resName','resprofileImage','itemName','serviceType','quantity','amount']);
     var newItem = new itemList(body);
    // console.log(newItem);
    newItem.save().then(()=>{
             //console.log('saved'); 
 })
 .catch((error)=>{
     res.status(404).send(error);
 });
   
 });

//order place
 app.post('/order',(req,res)=>{
    var body = _.pick(req.body,['cusEmail','cusAddress','resName','resAddress','itemName','serviceType','quantity','orderDate','amount','Status']);
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
 app.get('/find_resd',(req,res)=>{
     itemList.find({itemType : req.query['searchType']} ||
      {resName : req.query['searchType']}).then((docs)=>{
         res.send(docs)
        
     }).catch((err)=>{
         res.status(400).send(err);
     }) 
  
  });


 //Customer Registeration
 app.post('/registerCustomer',(req,res)=>{
    var body = _.pick(req.body,['cusName','cusAddress','cusContact','cusPassword','cusEmail','cusProfileimage']);
     var newCus = new Customer(body);
     //console.log(newCus);
    newCus.save().then(()=>{
             //console.log('saved');
     return newRes.generateAuthToken();   
 })
 .then((token)=>{
     res.header('x-auth',token).send(newUser);        
 })
 .catch((error)=>{
     res.status(404).send(error);
 }); 
 });


 //FInd out History of orders
 app.get('/find_resd',(req,res)=>{
    itemList.find({cusEmail : req.query['searchType']} ||
     {resName : req.query['searchType']}).then((docs)=>{
        res.send(docs);
    }).catch((err)=>{
        res.status(400).send(err);
    }) 
 });




let port = process.env.PORT || 3000;
  const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });