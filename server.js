var {mongoose}=require('./backend/db/db');
var {resList,itemList,orderList}=require('./backend/models/user_res');
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

app.post('/resUser',(req,res)=>{
    var body = _.pick(req.body,['resName','resAddress','serviceType','userName','password']);
     var newRes = new resList(body);
     console.log(newRes);
    newRes.save().then(()=>{
             console.log('saved');
     return newRes.generateAuthToken();
     
 })
 .then((token)=>{
     res.header('x-auth',token).send(newUser);        
 })
 .catch((error)=>{
     res.status(404).send(error);
 });
   
 });


 app.post('/itemList',(req,res)=>{
    var body = _.pick(req.body,['resName','itemName','itemType','quantity','amount']);
     var newItem = new itemList(body);
     console.log(newItem);
    newItem.save().then(()=>{
             console.log('saved'); 
 })
 .catch((error)=>{
     res.status(404).send(error);
 });
   
 });


 app.post('/order',(req,res)=>{
    var body = _.pick(req.body,['cus_userName','cus_Address','resName','resAddress','itemName','itemType','quantity','orderDate','amount','Status']);
     var newOrder = new orderList(body);
     console.log(newOrder);
    newOrder.save().then(()=>{
             console.log('saved'); 
 })
 .catch((error)=>{
     res.status(404).send(error);
 });
   
 });




let port = process.env.PORT || 3000;
  const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });