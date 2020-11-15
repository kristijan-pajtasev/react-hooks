const express = require("express");
const app = express();

app.get("/counter", (req, res) => {
    res.json({ counter: 0 });
})

app.listen(3005)