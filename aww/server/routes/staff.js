const express = require("express");
const Staff = require("../models/staff");
const router = express.Router();

router.post("/add", (req, res) => {
  const body = req.body;
  const id = req.body.id;
  if (
    Staff.findOne({ id: id }).then((err, user) => {
      if (user) {
        res.status(400).json("Staff Details already exists");
      }
      if (err) {
        res.status(400).json("Some glitch");
      }
      if (!user) {
        const staff = new Staff({
          name: req.body.name,
          mobileno: req.body.mobileno,
          role: req.body.role,
          id: req.body.id,
        });

        staff
          .save()
          .then((result) => {
            res.status(201).json("Staff added successfully");
          })
          .catch((err) => {
            res.status(400).json("Some glitch");
          });
      }
    })
  );
});

router.delete("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    const user = await Staff.findOne({ id: id });
    if (!user) {
      return res.json("User does not exist");
    }
    await Staff.findOneAndDelete({ id: id });
    res.json("Deleted successful");
  } catch (err) {
    res.json("Some glitch");
  }
});
module.exports = router;
