const express = requre("express");
const { json } = require("body-parser");
const cors = require("cors");

const port = 3030;
const app = express();

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`I am listening on ${port}`);
});
