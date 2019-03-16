const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const app = express();

app.use(serveStatic(__dirname + "/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
