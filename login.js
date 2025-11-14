// api/login.js
export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

  const { type, id, username, password } = req.body;

  

  if (type === 'voter') {
    const voter = mockVoters.find(v => v.id === id);
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
}