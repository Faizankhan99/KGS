const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const User = require("./Routes/User.route")
const Coures = require("./Routes/Course")
const dbConnect = require("./config/db")

dotenv.config();
let PORT = process.env.PORT||8080;

const app = express();
app.use(cors());
app.use(express.json());


app.use("/user", User);
app.use("/course", Coures);

app.get("/", (req, res) => {
  res.send("hello world !");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});