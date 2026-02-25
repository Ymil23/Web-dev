
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message:"Whats Your URL",
    name:"URL"
  },
  
  ])
  .then((answers) => {
    const url = answers.URL;

    //Saving the url as an image;
    var qr_svg = qr.image(url,{type: 'png'});
    qr_svg.pipe(fs.createWriteStream('qRimage.png'));
    console.log("QR Generated");
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });