const express = require("express");
const router = express.Router();
const { lipaNaMpesa } = require("../services/mpesa");

router.post("/mpesa", async (req, res) => {
  const { phone, amount } = req.body;

  try {
    const response = await lipaNaMpesa(phone, amount);
    res.json(response);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Mpesa request failed" });
  }
});

module.exports = router;
