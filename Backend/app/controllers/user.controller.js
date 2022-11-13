const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {body, validationResult } = require('express-validator')

const { User } = require("../models/index")

const secret = "test";

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const oldUser = await User.findOne({ email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({"name":oldUser.name,"email":oldUser.email,"isAuthenticated": true });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

const signup = async (req, res) => {
  const { email, password, firstName, lastName ,contactno } = req.body;
  try {
    body('email').isLength({ min: 5 });
    body('contactno').isNumeric();
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "Try any other email, this email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      contactNumber:contactno,
      token:token
    });
     result.save();
    res.status(201).json({ result, token });
  } catch (error) {
    if (!error) {
      return res.status(400).json({ error: error.array() });
    }
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};


module.exports={signin,signup}