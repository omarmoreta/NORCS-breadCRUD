const express = require("express");
require("dotenv").config();
const breadRoutes = require("./controllers/bread")
const app = express();

app.use("/breads", breadRoutes)

app.get("/", (req, res) => {
    res.send("<h1>Main Page</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`listening on PORT: ${PORT}`));
