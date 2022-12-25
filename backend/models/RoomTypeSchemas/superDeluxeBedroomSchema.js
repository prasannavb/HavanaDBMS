const mongoose = require("mongoose");

const superDeluxeBedroomSchema = mongoose.Schema({
    roomID : String,
        lastUsed : Date,
        previousCustomers : [{
            aadhar : {
                type : Number,
                validate: {
                    validator: function(val) {
                        return val.toString().length === 12
                    },
                    message: val => `${val.value} has to be 12 digits`
                }
            },
            startDate : Date,
            endDate : Date
        }]
})

const SuperDeluxeBedroomModel = mongoose.model("superDeluxeBedroom",superDeluxeBedroomSchema);
module.exports = SuperDeluxeBedroomModel;