const dotenv = require("dotenv");
// 'Import' the Express module instead of http
const express = require("express");

const mongoose = require("mongoose");

const findconts = require("./routers/findconts");
// Initialize the Express application
const app = express();

dotenv.config();
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
app.use(cors);
app.use(express.json());
app.use(logging);

app.use("/findconts", findconts);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.route("/findconts").get((request, response) => {
  response.send(
    JSON.stringify({
      size: "Large",
      sauce: "Red",
      toppings: ["Pepperoni"]
    })
  );
});

app.post("/findconts/:id", (request, response) => {
  const id = request.params.id;
  const body = request.body;
  response.json({
    message: "Success",
    findcont_id: id,
    findcont_body: body
  });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
