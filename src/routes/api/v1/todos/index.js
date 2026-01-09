const { getAllTodos, createTodos, getOneTodo } = require("../../../../controllers/todoControllers");

async function todoRouter(fastify, options) {
  fastify.get("/", getAllTodos);
  fastify.post("/", createTodos)
  fastify.get("/:id",getOneTodo)
}

module.exports = todoRouter ;