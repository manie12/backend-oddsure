import mongoose from "mongoose";

const previousSchema = new mongoose.Schema({
    date: String,
    home: String,
    away: String,
    gameType: String,

});

const previousModel = mongoose.model("previousStatus", previousSchema);

export default previousModel;