// Dependencies
const express = require("express");

// Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// Express server and Port
const app = express();
const PORT = process.env.PORT || 3001;

// Parsing and middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listner 
app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}!`);
})