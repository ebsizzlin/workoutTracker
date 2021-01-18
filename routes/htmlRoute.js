const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get

router.get

module.exports = router;