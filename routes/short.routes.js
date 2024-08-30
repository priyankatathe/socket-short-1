const router = require("express").Router()

const shotController = require("./../constroller/short.controller")

router
    .get("/", shotController.getAllshort)
    .post("/add", shotController.addshort)
    .put("/update/:id", shotController.updateshort)
    .delete("/delete/:id", shotController.deleteshort)

module.exports = router