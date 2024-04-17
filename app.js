const fs = require("fs");
const path = require("path");

const folderPath = "./assets";

// read all files in the directory 
// and save filename to filesArr

let filesArr = fs.readdirSync(folderPath);

// Loop through array and rename all files

filesArr.forEach((file, index) => { 
  
  let fullPath = path.join(folderPath, file);
  let fileExtension = path.extname(file);
  let fileName = path.basename(file, fileExtension);

  let nameParameter = "avril_2024"
  let newFileName = `${nameParameter}_${index}${fileExtension}`;

  console.log(newFileName);

  try {
    fs.renameSync(fullPath, path.join(folderPath, newFileName));
  } catch (error) {
    console.error(error)
  }

});

