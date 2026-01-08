const { getAllTodos, createTodos } = require("../../../../controllers/todoControllers");

async function todoRouter(fastify, options) {
  fastify.get("/", getAllTodos);
  fastify.post("/", createTodos)
}

module.exports = todoRouter ;