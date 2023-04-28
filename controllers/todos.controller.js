const { read, queryFilter } = require("../utils/model");

module.exports = TodoController = {
  GET: (req, res) => {
    const todos = JSON.parse(read("todos"));
    const query = req.query;

    // todos query for Todo userId
    const filteredTodoUserId = queryFilter("userId", query.userId, todos);
    if (filteredTodoUserId.length) return res.json(200, filteredTodoUserId);

    // todos query for Todo id
    const filteredTodoId = queryFilter("id", query.id, todos);
    if (filteredTodoId.length) return res.json(200, filteredTodoId);

    // todos query for Todo title
    const filteredTodoTitle = queryFilter("title", query.email, todos);
    if (filteredTodoTitle.length) return res.json(200, filteredTodoTitle);

    // todos query for Todo completed
    const filteredTodoCompleted = queryFilter(
      "completed",
      query.completed,
      todos
    );
    if (filteredTodoCompleted.length)
      return res.json(200, filteredTodoCompleted);

    res.json(200, todos);
  },
};
