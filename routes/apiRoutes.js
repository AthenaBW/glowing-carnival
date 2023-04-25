// Require the fs, express and uuid modules
const fs = require("fs");
const router = require("express").Router();
const uuid = require ("uuid");

// GET route for /notes path to read and return all saved notes, 
// parse into json data and send as response
router.get("/notes", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  res.json(JSON.parse(data));
})

//  POST route to save new notes , parse into data, creates unique id using UUID 
router.post("/notes", (req,res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNote = req.body;
  newNote.id = uuid.v4();
  notes.push(newNote);

// writes updated notes to db.json and sends array as response
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);

})

// Delete route for /notes, uses same instance but deletes input
router.delete("/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const deleteNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));

  res.json(deleteNote);
});

// Export router
module.exports = router;