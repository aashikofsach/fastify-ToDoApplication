async function getAllTodos(req, res) {
  // here this is the fastify object
  const { todoService } = this;

  const response = await todoService.getAll();

  // return await todoService.getAll()
  return res.status(200).send({
    response,
    key : "ritik"
  });
}

async function createTodos(req, res) {
  const { todoService } = this;

  const response = await todoService.create(req.body.todotext);

  //   return await todoService.create(req.body.todotext);

  return res.status(201).send({
    response,
  });
}

module.exports = {
  getAllTodos,
  createTodos,
};
