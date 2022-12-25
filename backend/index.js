const path = require("path");
const dotenv = require("dotenv").config({path: __dirname + '/.env'});
const mongoose = require('mongoose');  
const cors = require("cors");
const express = require('express');
const UserChannelModel = require('./models/userChannel');
const addUser = require('./userhandling/addUser');
const bookRoom = require('./userhandling/bookRoom');
const updateUser=require('./userhandling/updateUser');
const checkUser =require('./userhandling/checkUser');
const CheckAvailability=require('./userhandling/checkAvailability');
const handleUser=require('./userhandling/handleuser');
const addIssue =require('./addissue')
const getIssue=require('./getissue')
const viewDate = require('./userhandling/viewDate')
const ViewCostumer = require('./userhandling/viewcostumer');

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;
const mongopw = process.env.DBPW;

mongoose.connect(`mongodb+srv://PLSM:${mongopw}@cluster0.fx6xecm.mongodb.net/login?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.info("Connected to mongoDB");
}).catch((err) => {
    console.log("Error! : ",err);
})      

app.post("/api/insert", (req,res) => {
    addUser(req.body,res);
})

app.post("/api/update1", (req,res) => {
    updateUser(req,res)
    
} )

app.post("/api/raiseticket",(req,res)=>{
    addIssue(req,res)
})

app.post("/api/bookRoom" , async(req,res) =>  {
    const roomAvailiblity = await CheckAvailability({
        roomType : req.body.stayDetails[0].roomType,
        startDate : req.body.stayDetails[0].startDate,
        endDate : req.body.stayDetails[0].endDate
    },res)
     console.log("room availability")
    console.log(roomAvailiblity); 
    if (!roomAvailiblity.isAvailable) {
        res.status(200).json({"msg" : "Room not available for required dates"})
    }  
    else {
        if (!(await checkUser(req.body.aadhar))) {
            console.log("inside add user");
            addUser(req.body,res);
        } else {
            console.log("inside update user");
            updateUser(req,res,{aadhar:req.body.aadhar},req.body.stayDetails);
        }
        bookRoom(roomAvailiblity.roomModel,{
            aadhar: req.body.aadhar,
            startDate : req.body.stayDetails[0].startDate,
            endDate : req.body.stayDetails[0].endDate
        },roomAvailiblity._id,res);}
    
})

app.get('/api/readt',(req,res)=>{
    getIssue(req,res);
})

app.post('/api/viewdate',(req,res) => {
    viewDate(req,res);
})

app.post('/api/viewcustomer',(req,res) => {
    ViewCostumer(req,res);
})


app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(PORT, () => {
    console.log("Listening on Port!",PORT);
}); 