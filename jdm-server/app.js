const express = require("express");
const bodyParser = require("body-parser");
const Scrapper = require("./services/scrapper").Scrapper;
require("./db");
const DBGenerator = require("./services/DBGenerator").DBGenerator;
const Linker = require("./services/linker").Linker;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let scrapper = new Scrapper();
let dbGenerator = new DBGenerator();
let linker = new Linker();

require("./routes/dataRecovery")(app, scrapper, linker);
app.get("/", (req, res) => {
    res.send({ hi: "per5u5" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});

//dbGenerator.createIdRelations();

// execute it only the first time !
//dbGenerator.addFullTerms();