const fs = require("fs");
const path = require("path");

// const data = fs.readFileSync(path.resolve(__dirname, "notes.txt"), "utf-8");
// console.log(data);

const readFromFile = (error, data) => {
  if (error) {
    console.log("data gagal diambil");
    return;
  }
  console.log(data);
};

fs.readFile(path.resolve("./filesystem/notes.txt"), "UTF-8", readFromFile);
