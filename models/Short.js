const mongoose = require("mongoose")

const shortSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    hero: { type: String, required: true },
    complete: { type: Boolean, default: true },
}, { timestamps: true })

module.exports = mongoose.model("short", shortSchema)