const express = require("express");
const cors = require("cors");
const multer = require("multer");
const TiketController = require("./controllers/TiketController");

const app = express();
const port = 3000;
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(fileUpload());

app.post("/tickets", TiketController);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
