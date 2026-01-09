const fp = require("fastify-plugin");

class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async getAll() {
   return this.todoRepository.getAll();
  }

  async create(todonext)
  {
    return this.todoRepository.create(todonext)
  }
  async getOne(id) {
    return this.todoRepository.getOne(id);
  }
  async deleteOne(id) {
    this.todoRepository.deleteOne(id);
  }
  async deleteAll() {
    this.todoRepository.deleteAll();
  }
}

async function todoService(fastify, options) {
  const { todoRepository } = fastify;
  const service = new TodoService(todoRepository);
  fastify.decorate("todoService", service);
}

module.exports = fp(todoService);
