const mongoose = require("mongoose");
const shortid = require('shortid');
const custom = "suraj";

const shortUrlSchema = new mongoose.Schema({
  full: { type: String, required: true },
  short: { type: String, required: true, default: shortid },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
},{
    versionKey:false,
    timestamps:true
});

const Url = mongoose.model("shorturls", shortUrlSchema);

module.exports = Url;
