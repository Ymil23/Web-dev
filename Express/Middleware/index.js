import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));//filePath

const app = express();
const port = 3000;
    //parsing incoming data into req.body
app.use(bodyParser.urlencoded({extended: true}));

app.post('/submit',(req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname +"/index.html");
    console.log("The Path is: "+__dirname +"/index.html");
});


app.listen(port,()  => {
    console.log(`Server runnning on port ${port}`);
});