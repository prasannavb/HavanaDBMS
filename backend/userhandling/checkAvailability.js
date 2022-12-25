//Checks if room exists on said date and returns binary value to front end
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

// Function returns an object with room type, and status of each room on said date
async function CheckAvailability(obj, res) {
  const roomType = obj.roomType;
  const findingDate = new Date(obj.startDate);
  console.log(findingDate);
  console.log(roomType);

  const requiredModel = RoomsModels[TypesOfRooms.indexOf(roomType)];

  const res1 = await requiredModel.find({ lastUsed: { $lt: findingDate } });
  console.log("res1");
  console.log(res1);
  if (res1.length <= 0) {
    return ({
      isAvailable: false,
      roomModel: null,
      roomID: null,
    });
  } else {
    const sortedData = res1.sort((a, b) => {
      if (a.lastUsed > b.lastUsed) return 1;
      else if (a.lastUsed < b.lastUsed) return -1;
      else return 0;
    });
    console.log("sorted array")
    console.log(sortedData);
    return ({
      isAvailable: true,
      roomModel: requiredModel,
      _id: sortedData[0]._id 
      ,
    });
  }
}

module.exports = CheckAvailability;
