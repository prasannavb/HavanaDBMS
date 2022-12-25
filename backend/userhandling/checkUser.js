// If room is available, it checks if user exists already, if yes update stayDetails alone else create new user

const UserChannelModel = require('../models/userChannel');


async function checkUser(aadharID) {
    const res1=await UserChannelModel.find({aadhar : aadharID});
    if(res1.length<=0)
    {
        return false;
    }
    return true;
}

module.exports = checkUser;