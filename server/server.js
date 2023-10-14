const express = require("express");
const connectDB = require("./Connection");
const app = express();
const users = require("./route");
const cors = require("cors");
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use("/api", users);

const port = 5000;

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://gradems:gradems@gradems.xyklad2.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(port, console.log(`server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
