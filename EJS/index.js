import express from "express";

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const manta = new Date();
    var d = manta.getDay;
    if (d == 0 || d == 6) {
        res.render("index.ejs", {
            wday: "The Weekend",
            whatToDo: " Have Funnn!"
        });
    } else {
        res.render("index.ejs", {
            wday: "a Weekday",
            whatToDo: "Work Hard!!"

        })
    }
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});