import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
//File Path
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandN = '';

app.use(bodyParser.urlencoded({
  extended: true
}));

//Constructing Our Own Middleware;
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandN = req.body["street"] + req.body["pet"];
  next();
}
app.use(morgan("dev"));
app.use(bandNameGenerator);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index2.html");
});

app.post('/submit', (req, res) => {
  /*
        we also discard the bandNameGenerator Method and just initialize bandN on here like this:

    bandN = req.body["street"]+ req.body["pet"]; 

  */
  res.send(`<h1>Your Band Name is: </h1><h2>${bandN} ✌️</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});