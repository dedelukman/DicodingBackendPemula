const fs = require("fs");
const path = require("path");

const input = path.resolve(__dirname, "input.txt");
const output = path.resolve(__dirname, "output.txt");

const readableStream = fs.createReadStream(input, {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(output);

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.log("gagal");
  }
});

readableStream.on("end", () => {
  writableStream.end();
});
