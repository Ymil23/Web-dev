
import express from "express";
const app = express();
const port = 3000;
    //Local Hosting
app.get('/',(req, res) => {
    res.send('Kamil Ina Abdirahman!');
});
    //Adding More Routes
app.get('/about', (req, res) =>{
    res.send("Yusrah Ina Ahmed");
});

app.get('/contact', (req, res) => {
    res.send('Contact us at Bellamour.com');
})

//Sending HTML
app.get('/', (req, res) => {
    res.send("<h1>Kamiliant!</h1>")
})
    // Send JSON
app.get('/api/data', (req, res)=>{
    res.json({
        name:`Kamil`,
        project: 'Web Development Bootcamp',
        day:12
    });
})
app.listen(3000, ()=> {
    console.log(`Server Running on port ${port}`);
});