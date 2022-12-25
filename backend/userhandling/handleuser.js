const SingleBedroomModel = require("../models/RoomTypeSchemas/singleBedroomSchema");
const DoubleBedroomModel = require("../models/RoomTypeSchemas/doubleBedroomSchema");
const DeluxeBedroomModel = require("../models/RoomTypeSchemas/deluxeBedroomSchema");
const SuperDeluxeBedroomModel = require("../models/RoomTypeSchemas/superDeluxeBedroomSchema");
const SuiteBedroomModel = require("../models/RoomTypeSchemas/suiteBedroomSchema");
const VillaBedroomModel = require("../models/RoomTypeSchemas/singleBedroomSchema");
const userChannelModel =require("../models/userChannel")

const addUser=require("./addUser");
const updateUser=require('./updateUser');
const bookRoom=require('./bookRoom');

const TypesOfRooms = [
  "single",
  "double",
  "deluxe",
  "superDeluxe",
  "suite",
  "villa",
];
const RoomsModels = [
  SingleBedroomModel,
  DoubleBedroomModel,
  DeluxeBedroomModel,
  SuperDeluxeBedroomModel,
  SuiteBedroomModel,
  VillaBedroomModel,
];

// Function returns an object with room type, and status of each room on said date
 function handleUser(req,obj, res) {
  const roomType = obj.roomType;
  const findingDate = new Date(obj.startDate);
  console.log(findingDate);
  console.log(roomType);

  const requiredModel = RoomsModels[TypesOfRooms.indexOf(roomType)];
 
  requiredModel.find({ 'lastUsed': { $lt: findingDate } }, (err, data) => {
    if (err) {
        console.log("failed in check availabilitygggggggggggggggggggg")
      return res.status(500).send(err)
    } 
    else {
        console.log(data);
      if (data.length <= 0) {
       
            res.status(200).json({"msg" : "Room not available for required dates"})

        
      } 
      else {
        const sortedData = data.sort((a, b) => {
          if (a.lastUsed > b.lastUsed) return 1;
          else if (a.lastUsed < b.lastUsed) return -1;
          else return 0;
        });
        console.log("sorted array")
        console.log(sortedData[0].roomID);
       const data1= {
          isAvailable: true,
          roomModel: requiredModel,
          roomID: sortedData[0].roomID,
        }
        console.log(req.body.aadhar);

        userChannelModel.find({aadhar : req.body.aadhar}, (err,data) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                console.log('data');
                console.log(data==null);
                console.log("inside find user")
                console.log(data);
                if(data!=null )
                {
                    console.log("inside update user");
                    updateUser(req,res,{aadhar:req.body.aadhar},req.body.stayDetails[0])
                    
                }
                else{
                    console.log("inside add user block")
                    addUser(req.body,res);
                }
                bookRoom(data1.roomModel,{
                    aadhar: req.body.aadhar,
                    startDate : req.body.stayDetails[0].startDate,
                    endDate : req.body.stayDetails[0].startDate
                },data1.roomID,res);
            }
        })
      }
    }
  });
}

module.exports = handleUser;
