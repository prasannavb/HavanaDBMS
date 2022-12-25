const mongoose = require("mongoose");

const suiteBedroomSchema = mongoose.Schema({
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

const SuiteBedroomModel = mongoose.model("suiteBedroom",suiteBedroomSchema);
module.exports = SuiteBedroomModel;