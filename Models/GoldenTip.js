import mongoose from "mongoose";

const GoldenTipSchema = new mongoose.Schema({
    totalOdds: String,
    home: String,
    away: String,
    oddsToday: String,
    createdAt: String


});

const GoldenTipModel = mongoose.model("GoldenTip", GoldenTipSchema);

export default GoldenTipModel;