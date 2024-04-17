const fs = require("fs");
const path = require("path");

const folderPath = "./assets";

// read all files in the directory 
// and save filename to filesArr

let filesArr = fs.readdirSync(folderPath);

let nameParameter = process.argv[2]

// Loop through array and rename all files

filesArr.forEach((file, index) => { 
  
  let fullPath = path.join(folderPath, file);
  let fileExtension = path.extname(file);
  let fileName = path.basename(file, fileExtension);

  let prefix = fileName.slice(0,process.argv[3])
  console.log(prefix)

  let newFileName = `${prefix}-${nameParameter}_${index}${fileExtension}`;

  console.log(newFileName);

//   try {
//     fs.renameSync(fullPath, path.join(folderPath, newFileName));
//   } catch (error) {
//     console.error(error)
//   }

});

