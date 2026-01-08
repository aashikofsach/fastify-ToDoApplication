const fp = require("fastify-plugin");

class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  getAll() {
    this.todoRepository.getAll();
  }
  getOne(id) {
    this.todoRepository.getOne(id);
  }
  deleteOne(id) {
    this.todoRepository.deleteOne(id);
  }
  deleteAll() {
    this.todoRepository.deleteAll();
  }
}

async function todoService(fastify, options) {
  const { todoRepository } = fastify;
  const service = new TodoService(todoRepository);
  fastify.decorate("todoService", service);
}

module.exports = fp(todoService);
