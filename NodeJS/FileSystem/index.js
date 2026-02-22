
//Creating a file;
const fs = require("fs");

fs.writeFile("message.text", "Hello from Kamil", (err) =>{

    if (err) throw err;
    console.log("The File Has Been saved!");

});


//reading a File;
fs.readFile("./message.text",  (err, data)=> {
    if(err) throw err;
    console.log(data);
});