const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const FunctionController = require("./Function/FunctionController");

app.get("/api", FunctionController.getMultiplier);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
