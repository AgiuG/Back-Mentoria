const express = require("express");

const PORT = process.env.PORT || 3001;

const cors = require("cors");

const app = express();

app.use(cors());

const FunctionController = require("./Function/FunctionController");

app.get("/", FunctionController.getMultiplier);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
