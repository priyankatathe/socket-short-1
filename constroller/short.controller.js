const asyncHandler = require("express-async-handler")
const Short = require("../models/Short")

exports.getAllshort = asyncHandler(async (req, res) => {
    const result = await Short.find()
    res.json({ message: "fetch  success", result })
})
exports.addshort = asyncHandler(async (req, res) => {
    await Short.create(req.body)
    res.json({ message: "add  success" })
})
exports.updateshort = asyncHandler(async (req, res) => {
    await Short.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "add  success" })
})
exports.deleteshort = asyncHandler(async (req, res) => {
    await Short.findByIdAndDelete(req.params.id)
    res.json({ message: "add  success" })
})