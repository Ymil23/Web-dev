import express, {
  response
} from "express";
import bodyParser from "body-parser";
import axios from "axios";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan("dev"));

//Get Data from AXIOS
app.get("/", async (req, res) => {
  try {

    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", {
      data: result
    });

    console.log(result);

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {

  // Using axios to make an API request to the /filter endpoint.
  try {
    console.log(req.body);

    const type = req.body.type;
    const participants = req.body.participants;

    //Passing both Type and Participant queries
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);

    const result = response.data;
    console.log(result);
    const randomActivity = Math.floor(Math.random() * result.length);
    res.render("index.ejs", {
      data: result[randomActivity]
    });


  } catch (error) {
    console.log("Failed to Load the data");

    res.render("index.ejs", {
      error: "No activities that match your criteria."
    })

  }



});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});