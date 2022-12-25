const UserChannelModel = require('../models/userChannel');


async function ViewCostumer(req,res) {
    const type =req.body.type;
    const detail=req.body.detail;
    const cond ={ [type]:detail};
    const res1=await UserChannelModel.find(cond);
    if(res1.length<=0)
    {
        return  res.status(200).json({msg:"no user found with the particular details"});
    }
    return  res.status(200).json(res1);
}

module.exports = ViewCostumer;