const express = require('express');
const app = express();
app.use(express.json());

// Mock DB
let voters = [];
let candidates = [];
let votes = {};

app.post('/login', (req, res) => {
  const { type, id, username, password } = req.body;

  if (type === 'voter') {
    const voter = voters.find(v => v.id === id);
    if (!voter) return res.status(404).json({ success: false, message: "Not registered" });
    if (voter.voted) return res.status(403).json({ success: false, message: "Already voted" });
    return res.json({ success: true, voter });
  }

  if (type === 'admin') {
    if (username === "Sofea Bautista" && password === "NORTHLINK TECHNOLOGICAL_COLLEGE,INC") {
      return res.json({ success: true });
    }
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  res.status(400).json({ success: false, message: "Invalid type" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));