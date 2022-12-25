const mongoose = require("mongoose");

const issueChannelSchema = mongoose.Schema({
    type:String,
    roomID : String,
    ticket:String,
    status:String,
    date : Date,
    description:String
});

const ticketChannelModel = mongoose.model("tickets",issueChannelSchema);
module.exports = ticketChannelModel;