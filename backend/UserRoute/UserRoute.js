const express = require("express");
const User = require("../UserModel/UserModel");

const router = express.Router();

router
  .route("/users")

  .get(async (req, res) => {
    const foundusers = await User.find();
    res.json(foundusers);
  })

  .post(async (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    const newUser = User({
      fname,
      lname,
      address,
      email,
      phone,
    });
    await newUser.save((err) => {
      if (!err) {
        res.json({ message: "Record Saved" });
      }
    });
  });

router
  .route("/users/:id")

  .get(async (req, res) => {
    const id = req.params.id;
    const founduser = await User.findOne({ _id: id });
    res.json(founduser);
  })

  .put(async (req, res) => {
    const id = req.params.id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    new User({
      fname,
      lname,
      address,
      email,
      phone,
    });
    await User.updateOne(
      { _id: id },
      {
        $set: {
          fname: fname,
          lname: lname,
          address: address,
          email: email,
          phone: phone,
        },
      },
      { overwrite: true },
      (err) => {
        if (!err) {
          res.json({ message: "Record Updated" });
        }
      }
    );
  })

  .delete(async (req, res) => {
    const id = req.params.id;
    await User.deleteOne({ _id: id }, (err) => {
      if (!err) {
        res.json({ message: "Record Deleted" });
      }
    });
  });

router
  .route("/userview/:id")

  .get(async (req, res) => {
    const id = req.params.id;
    const founduser = await User.findOne({ _id: id });
    res.json(founduser);
  });

module.exports = router;
