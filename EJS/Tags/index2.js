
import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const data = {
        title: "EJS Tags",
        sekemo: new Date().getSeconds(),
        items: ["Express.js","Node.js","PostgreSql","React"],
        htmlContent:"<em> <strong>Arsenal are Bottling the League</strong></em>"
    };
    res.render('tags.ejs', data)
});
app.listen(port, () => {
    console.log(`Listening On Port ${port}`);
});