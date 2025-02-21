require("dotenv").config();

const express = require('express');
const router = require("./routes/routes");

const app = express();

require("./config/db.config");

app.use("/", router);

app.use((req,res,next) => {
    res.status(404);
    res.json({error: "Not found"});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});