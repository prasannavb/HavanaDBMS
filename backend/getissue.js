const ticketChannelModel = require('./models/issueChannel')

function getIssue(req,res)
{
    ticketChannelModel.find((err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        else{
            return res.status(200).json(data)
        }
    })
}

module.exports=getIssue;