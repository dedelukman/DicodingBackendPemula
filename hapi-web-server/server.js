// console.log("Halo, kita akan belajar membuat server menggunakan Hapi");
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  // const handler = (request, h) => {
  //   const response = h.response("success");
  //   response.type("text/plain");
  //   response.header("X-Custom", "some-value");
  //   return response;
  // };

  // const handlere = (request, h) => {
  //   return h
  //     .response("success")
  //     .type("text/plain")
  //     .header("X-Custom", "some-value");
  // };

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
