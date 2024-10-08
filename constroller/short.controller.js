const asyncHandler = require("express-async-handler")
const Short = require("../models/Short")
const { io } = require("../socket/socket")

exports.getAllshort = asyncHandler(async (req, res) => {
    const result = await Short.find()
    io.emit("Short-create-respone", result)
    res.json({ message: "fetch  success", result })
})
exports.addshort = asyncHandler(async (req, res) => {
    await Short.create(req.body)
    const result = await Short.find()
    io.emit("Short-create-respone", result)
    res.json({ message: "add  success" })
})
exports.updateshort = asyncHandler(async (req, res) => {
    await Short.findByIdAndUpdate(req.params.id, req.body)
    const result = await Short.find()
    io.emit("Short-create-respone", result)
    res.json({ message: "update  success" })
})
exports.deleteshort = asyncHandler(async (req, res) => {
    await Short.findByIdAndDelete(req.params.id)
    const result = await Short.find()
    io.emit("Short-create-response", result)
    res.json({ message: "delete  success" })
})