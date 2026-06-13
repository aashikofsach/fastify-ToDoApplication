const app = require("./app");
const { PORT } = require("./config/serverConfig");

const fastify = require("fastify")();

fastify.register(app)

fastify.listen({ port: Number(PORT) }, (err) => {
  if (err) {
    // console.log()
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is up at port : ${PORT}`);
});
