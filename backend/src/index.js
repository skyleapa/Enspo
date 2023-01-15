const express = require("express");
const { respond } = require("./Sort.js");

const app = express();
app.use(express.json());

app.post("/closeness", (req, res) => {
  const { type, tags } = req.body;
  respond(type, tags).then((result) => {
    console.log(`Sent out number ${result}`);
    res.send(result);
  });
});

const port = process.env.PORT || 4242;
app.listen(port);
console.log(`App listening at port ${port}`);
