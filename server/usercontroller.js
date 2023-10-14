const User = require("./usermodal");

const createUser = async (req, res) => {
  const { name, rollno, sub1, sub2, sub3, grade } = req.body;
  const userdetails = {
    name: name,
    rollno: rollno,
    sub1: sub1,
    sub2: sub2,
    sub3: sub3,
    grade: grade,
  };
  try {
    const response = await User.create(userdetails);
    res.status(201).json({ response });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUser = async (req, res) => {
  const { rollno: rollno } = req.params;
  try {
    const user = await User.findOne({ rollno: rollno });
    // if (!user) return res.status(404).send("invalid roll number");
    res.status(200).json({ response: user });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
module.exports = {
  createUser,
  getUser,
};
