const UserChannelModel = require('../models/userChannel')

function addUser (userObj,res) {
    var userChannelModel = new UserChannelModel()
    userChannelModel.name = userObj.name;
    userChannelModel.aadhar = userObj.aadhar;
    userChannelModel.phoneNumber = userObj.phoneNumber;
    userChannelModel.stayDetails = userObj.stayDetails;
    userChannelModel.save((err,data)=>{
        if (err) {
            console.error(err);
        } else {
            console.log(data)
            //res.status(200).json({"msg" : "inserted to DB"});
        }
    })
}

module.exports = addUser;