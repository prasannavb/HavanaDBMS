const ticketChannelModel = require('./models/issueChannel')
function addIssue(req,res)
{
    var issueChannelModel = new ticketChannelModel();
    issueChannelModel.type = req.body.type;
    issueChannelModel.roomID = req.body.roomID;
    issueChannelModel.ticket = req.body.ticket;
    issueChannelModel.status= req.body.status
    issueChannelModel.date =new Date(req.body.date);
    issueChannelModel.description= req.body.description;

    issueChannelModel.save((err,data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
            res.status(200).json({"msg" : "ticket raised successfully"})
        }
    })
    
}

module.exports =addIssue;