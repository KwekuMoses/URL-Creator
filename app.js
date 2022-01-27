const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");

var https = require("https");
var cors = require("cors");

app.use(express.static("public"));

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// middleware for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.params.url);
  // Get the req.route.path  and send that data forward to the viewer
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.glb`;
  // let ios_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.reality`;
  let playcanvasurl =
    "https://playcanv.as/e/p/dQEvWiqt/?model_link=https://s3.eu-west-2.amazonaws.com/product.baetes.com/";
  const testFolder = "./glbfiles";
  const fs = require("fs");

  var producturlarray = [];

  var arrayOfFiles = fs.readdirSync("./glbfiles");
  arrayOfFiles.forEach(function (file) {
    producturlarray.push(file);
  });

  console.log(producturlarray);
  res.render("index", {
    playcanvasurl: playcanvasurl,
    producturlarray: producturlarray,
    baseUrl: "test",
  });
});
app.post("/", (req, res) => {
  console.log(req.body.name);
  res.render("index", {
    baseUrl: "",
    optionalUrl: "",
  });
  // Get the req.route.path  and send that data forward to the viewer
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.glb`;
  // let ios_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.reality`;
});
app.get("/:url", (req, res) => {
  // console.log(req.params.url);
  // console.log(req.query.size);
  // Get the req.route.path  and send that data forward to the viewer
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/P655208_${req.params.url}_30x40_WEBB.glb`;
  // let ios_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/P655208_${req.params.url}_30x40_WEBB.reality`;
  // let size = req.query.size;
  // console.log(size + "SSS");
  // res.render("index", {
  //   root: __dirname,
  //   android_src: android_src,
  //   ios_src: ios_src,
  //   size: size,
  // });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//wget https://aws-codedeploy-eu-north-1.s3.amazonaws.com/latest/install
