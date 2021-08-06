import mongoose from "mongoose";

const BasicTipSchema = new mongoose.Schema({
    totalOdds: String,
    home: String,
    away: String,
    oddsToday: String,
    createdAt: String
});

const BasicTipModel = mongoose.model("BasicTip", BasicTipSchema);

export default BasicTipModel;