// const message = (name) => {
//   console.log(`halo, apa kabar ${name}`);
// };

// message("dede");

// const moment = require("moment");

// const date = moment().format("MMM Do YY");
// console.log(date);

// const fs = require("fs");

// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log("Gagal membaca berkas");
//     return;
//   }
//   console.log(data);
// };

// fs.readFile("todo.txt", "utf-8", fileReadCallback);

// const data = fs.readFileSync("todo.txt", "UTF-8");
// console.log(data);

// const fs = require("fs");

// const readableStream = fs.createReadStream("./article.txt", {
//   highWaterMark: 10,
// });

// readableStream.on("readable", () => {
//   try {
//     process.stdout.write(`[${readableStream.read()}]`);
//   } catch (error) {
//     // catch the error when the chunk cannot be read.
//   }
// });

// readableStream.on("end", () => {
//   console.log("Done");
// });

const fs = require("fs");

const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Ini merupakan catatan pertamaku hiks\n");
writableStream.write("Ini merupakan baris kedua hiks\n");
writableStream.end("dan ini merupakan akhirsa hiks....");
