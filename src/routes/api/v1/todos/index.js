async function todoRouter(fastify, options) {
  fastify.get("/", (req, res) => {
    return "todos";
  });
}

module.exports = todoRouter ;