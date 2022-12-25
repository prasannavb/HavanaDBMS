const UserChannelModel = require("../models/userChannel");

// If user already exists in checkAvailability, update stay details array of the said user
function updateUser(req,res,oldData,newData)
{
/* const oldData = req.body.old;
    const newData = req.body.newData; */
    UserChannelModel.updateOne(oldData,{$push:{stayDetails:newData}},(err,data) => {
        if (err) {
            console.error(err)
        } else {
            console.log(data)
            //res.status(200).json({"msg" : "updated in db"})
        }
    })}
module.exports=updateUser