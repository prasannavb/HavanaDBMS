const mongoose = require("mongoose");

const userChannelSchema = new mongoose.Schema({
    name: String,
    aadhar : {
              type : Number,
              required: true,
              validate: {
                  validator: function(val) {
                      return val.toString().length === 12
                  },
                  message: val => `${val.value} has to be 12 digits`
              }
             },
    phoneNumber : {
                   type : Number,
                   required : true,
                   validate: {
                      validator: function(val) {
                          return val.toString().length === 10
                      },
                      message: val => `${val.value} has to be 10 digits`
                      }
                  },
      stayDetails : [{
        startDate : Date,
        endDate : Date,
        roomType : String,
        finalBill : Number,
        roommates : Array,
        bookingID : String  
      }]
  });

const UserChannelModel = mongoose.model("users",userChannelSchema);

 module.exports = UserChannelModel;