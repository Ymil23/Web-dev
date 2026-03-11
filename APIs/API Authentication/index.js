import express from "express";
import axios from "axios";
import morgan from "morgan";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const myUsername = "alitaBattle";
const myPassword = "ALITABATTLEANGLE23";
const myAPIKey = "6c99c109-8530-49c0-84d1-40b6a5cb05aa";
const myBearerToken = "9ddf5b5f-b12f-4a27-8e65-6b19a6eb2a20";


app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  // Using axios to hit up the /random endpoint
  try {
    const response = await axios.get(API_URL + "/random");
    console.log(response.data);
    const result = JSON.stringify(response.data);
    
    res.render("index.ejs", { content: result});
    
  } catch (error) {
    res.send({error:error.message});
  }

});

app.get("/basicAuth", async (req, res) => {
 //Specifying that we only want the secrets from page 2
    try {
    const result = await axios.get(API_URL + "/all?page=2", {

      //Using AXIOS to do Basic Auth:
      auth: {
        username: myUsername,
        password: myPassword,
      },
    });
    const response = JSON.stringify(result.data)
    res.render("index.ejs", { content: response });
  } catch (error) {
    res.status(404).send(error.message);
  }
  
});

app.get("/apiKey", async (req, res) => {
  // hitting up the /filter endpoint with all secrets score of 5 or greater
  try {
    const response = await axios.get(API_URL + "/filter?", {
      params: {
        score: 5,
        apiKey: myAPIKey,
      }
    });
    const result = JSON.stringify(response.data);
    res.render('index.ejs',{ content : result} );

  } catch (error) {
    res.status(500).send({error:error.message});
    
  }
});

app.get("/bearerToken", async (req, res) => {
 //hitting up the secrets api and id = 42;
  try {
    const response = await axios.get(API_URL + "/secrets/42", {
      headers: {
        "Authorization": `Bearer ${myBearerToken}`, 
      },
      params: {
        id: 42,
      }
    });
    const result = JSON.stringify(response.data);
    res.render('index.ejs', {content: result}); 
    
  } catch (error) {
    res.status(500).send({error:error.message});
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
