const express = require("express");
const app = express();
const path = require("path");
const multer = require('multer');
const upload = multer();
const bodyParser = require('body-parser')
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true })); 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
  res.render("index", {title: "guest"});
});


router.get("/next", (req, res) => {
  res.render("next");
});

router.get("/create", (req, res) => {
  res.render("create")
})

router.post("/order", upload.none(), (req, res) => {
  const formData = req.body;
  res.render("order", {order: formData.order})
})

app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");