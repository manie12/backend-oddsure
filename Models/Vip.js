import mongoose from "mongoose";

const VipTipSchema = new mongoose.Schema({
    totalOdds: String,
    home: String,
    away: String,
    oddsToday: String,
    createdAt: String


});

const VipTipModel = mongoose.model("VipTip", VipTipSchema);

export default VipTipModel;