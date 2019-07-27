let notes = [];

let array = [];

// CREATE (NOTES)
const addToNotes = (req, res) => {
  req.body.id = notes.length + 1;
  notes.push(req.body);
  res.status(200).json(notes);
  console.log("Note successfully added");
};

const receivePublicToken = (req, res) => {
  console.log("public token below");
  console.log(req.body.public_token);
  array.push(req.body);
  res.status(200).json(array);
  console.log("public token HIT!");
  // console.log(request.body.public_token);
};

module.exports = {
  addToNotes,
  receivePublicToken
};
