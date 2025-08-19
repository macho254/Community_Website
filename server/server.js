// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allow requests from frontend
app.use(express.json()); // parse JSON bodies

// Simple donate route
app.post("/api/donate", (req, res) => {
  const { method, amount } = req.body;

  console.log(`Donation received: Method=${method}, Amount=${amount}`);
  
   if (!method || !amount) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }
  res.json({
    success: true,
    message: `Thanks for donating via ${method}!`,
    amount,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});




 
