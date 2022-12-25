const UserChannelModel = require("../models/userChannel");
const SingleBedroomModel = require("../models/RoomTypeSchemas/singleBedroomSchema");
const DoubleBedroomModel = require("../models/RoomTypeSchemas/doubleBedroomSchema");
const DeluxeBedroomModel = require("../models/RoomTypeSchemas/deluxeBedroomSchema");
const SuperDeluxeBedroomModel = require("../models/RoomTypeSchemas/superDeluxeBedroomSchema");
const SuiteBedroomModel = require("../models/RoomTypeSchemas/suiteBedroomSchema");
const VillaBedroomModel = require("../models/RoomTypeSchemas/singleBedroomSchema");

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

async function viewDate(req,res) {
    let roomType = req.body.roomType;
    let requiredDate = new Date(req.body.reqdDate);
    const requiredModel = RoomsModels[TypesOfRooms.indexOf(roomType)];
    const data = await requiredModel.find({
      previousCustomers : {
        $elemMatch : {
          startDate : {
            $lte : requiredDate
          },
          endDate : {
            $gte : requiredDate
          }
        }
      }
    });
    let userArray = [];
    data.forEach(room => {
      newRoom = room['_doc']
      let prevCustomers = newRoom['previousCustomers']
      console.log(prevCustomers)
      prevCustomers.forEach(roomData => {
        let checkStartDate = new Date(roomData['startDate']);
        let checkEndDate = new Date(roomData['endDate']);
        if (checkStartDate <= requiredDate && checkEndDate >= requiredDate) {
          userArray.push(roomData['aadhar']);
        }
      })
    })
    let userData = []
    for (let i = 0; i < userArray.length; ++i) {
      let aadharNum = +userArray[i];
      let userDB = await UserChannelModel.find({aadhar : aadharNum});
      userData.push(userDB)
    }
    let finalUserData = []
    userData.forEach(user => {
      user.forEach(data => {
        let stay = data["stayDetails"];
        stay.forEach(userStay => {
          let userStart = new Date(userStay['startDate']);
          let userEnd = new Date(userStay['endDate']);
          let userRoomType = userStay['roomType'];
          if (requiredDate >= userStart && requiredDate <= userEnd && userRoomType == roomType) {
            finalUserData.push({
              name : data["name"],
              aadhar : data["aadhar"],
              phoneNumber : data["phoneNumber"],
              startDate : new Date(userStart),
              endDate : new Date(userEnd),
              roomType : roomType,
              roommates : userStay["roommates"]
            })
          }
        })
      })
    })
    res.status(200).json(finalUserData)
}

module.exports = viewDate;