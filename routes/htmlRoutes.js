// Require the path and express
const path = require("path");
const router = require ("express").Router();

// Get route for /notes path to send notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// Catch all GET route to send to index.html file for all other paths
router.get("*", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//  Exporting router
module.exports =router;
