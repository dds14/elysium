let notes = [];

// CREATE (NOTES)
const addToNotes = (req, res) => {
  req.body.id = notes.length + 1;
  notes.push(req.body);
  res.status(200).json(notes);
  console.log("DEREasdfadsfsadfsdK HELLOOSSS");
};

const receivePublicToken = (req, res) => {
  res.status(200).json("heylooo");
  console.log("HIT! public token");
};

module.exports = {
  addToNotes,
  receivePublicToken
};
