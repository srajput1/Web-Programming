const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);

app.listen(8080, () => {
    console.log("Server is Running!");
    console.log("Your routes will be running on http://localhost:8080");
});
