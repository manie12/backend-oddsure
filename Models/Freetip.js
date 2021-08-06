import mongoose from "mongoose";

const freeTipSchema = new mongoose.Schema({
    home: String,
    away: String,
    pick: String,
    createdAt: String


});

const freeTipModel = mongoose.model("freeTip", freeTipSchema);

export default freeTipModel;