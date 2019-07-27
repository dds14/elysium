const express = require("express");
const app = express();

const { addToNotes, receivePublicToken } = require("./controllers/controller");

app.use(express.json()); // this is middleware

const PORT = 4050;

// app.post("/api/notes", addToNotes);

app.post("/auth/public_token", receivePublicToken);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
