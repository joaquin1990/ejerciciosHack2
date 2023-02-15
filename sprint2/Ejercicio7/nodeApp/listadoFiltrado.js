const generalPath = __dirname;
const path = require("path");
const fs = require("fs");

// console.log(generalPath);
// console.log(path.basename);

const path1 = process.argv[2];
const fileType = process.argv[3];

console.log(path1 + fileType);

const fileFilter = async (searchedPath, fileType) => {
  fs.readdir(searchedPath, (err, files) => {
    if (err) console.log(err);
    else {
      console.log("\nFounded files: ");
      for (file of files) {
        const fileExtension = file.split(".")[1];
        if (fileExtension === fileType) {
          console.log(file);
        }
      }
    }
  });
};

fileFilter(path1, fileType);
