// console.log("Halo, bismillah jadi fullstack");

const http = require("http");

const requestListener = (request, response) => {
  const { method, url } = request;

  response.setHeader("Content-Type", "application/json");
  response.setHeader("X-Powered-By", "NodeJS");
  //   response.statusCode = 200;

  //   if (method === "GET") {
  //     response.end("<h1>Halo HTTP Server!</h1>");
  //   }

  //   if (method === "POST") {
  //     let body = [];

  //     request.on("data", (chunk) => {
  //       body.push(chunk);
  //     });

  //     request.on("end", () => {
  //       body = Buffer.concat(body).toString();
  //       const { name } = JSON.parse(body);
  //       response.end(`<h1>Hai, ${name}!</h1>`);
  //     });
  //   }

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        // `<h1>Ini adalah Homepage</h1>`
        JSON.stringify({ message: "Ini adalah Homepage!" })
      );
    } else {
      response.statusCode = 400;
      response.end(
        // `<h1>Halaman tidak dapat di akses dengan ${method} request</h1>`
        JSON.stringify({
          message: `Halaman tidak dapat di akses dengan ${method} request`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        // `<h1>Halo! ini adalah halaman about</h1>`
        JSON.stringify({ message: "Halo! ini adalah halaman about" })
      );
    } else if (method === "POST") {
      let body = [];
      request.on("data", (chunk) => {
        body.push(chunk);
      });
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(
          // `Halo, ${name}! ini adalah halaman about`
          JSON.stringify({ message: `Halo, ${name}! ini adalah halaman about` })
        );
      });
    } else {
      response.statusCode = 400;
      response.end(
        `<h1>Halaman tidak dapat di akses dengan ${method} request</h1>`
      );
    }
  } else {
    response.statusCode = 404;
    response.end(`<h1>Halaman tidak ditemukan</h1>`);
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
