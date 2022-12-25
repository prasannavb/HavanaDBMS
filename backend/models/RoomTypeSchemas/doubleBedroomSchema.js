const mongoose = require("mongoose");

const doubleBedroomSchema = mongoose.Schema({
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

const DoubleBedroomModel = mongoose.model("doubleBedroom",doubleBedroomSchema);
module.exports = DoubleBedroomModel;