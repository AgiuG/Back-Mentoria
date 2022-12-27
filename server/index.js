const express = require("express");

const PORT = process.env.PORT || 3001;

const cors = require("cors");

const app = express();

const issue2options = {
  origin: true,
  methods: ["POST", "GET", "HEAD", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
  maxAge: 3600,
  exposedHeaders: ["Total-Count", "Unread-Count"],
};

app.use(cors(issue2options));
app.options("*", cors());

const FunctionController = require("./Function/FunctionController");

app.get("/", FunctionController.getMultiplier);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
