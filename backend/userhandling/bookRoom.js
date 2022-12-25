// After checking availability and checking user, room is booked with said details
function bookRoom(model,rdata,_id,res)
{
    console.log("inside book room");
    var opDate = new Date(rdata.endDate);
    model.updateOne({'_id':_id},{$set:{"lastUsed":opDate},$push:{"previousCustomers":rdata}}
    ,(err,data) => {
    if (err) {
        console.error(err)
        return res.status(500).json({"msg" : "some error occured!"});
    } else {
        console.log(data)
        return res.status(200).json({"msg" : "updated in db",data,_id})
    }
}) 
}

module.exports=bookRoom;