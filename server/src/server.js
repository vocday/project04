require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./middleware/auth.mid.js");
const mongo = require("./config/db/mongo.js");
const mysql = require("./config/db/mysql.js");
const route = require("./routes/webRoute");
const adminRoute = require("./routes/admin.route.js");

const app = express();

mysql.connect();
// mongo.connect();

// app.use(morgan('combined'))
// var corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);
adminRoute(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
