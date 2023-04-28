const { createServer } = require("http");
const Express = require("./lib/express");
const usersController = require("./controllers/users.controller");
const todosController = require("./controllers/todos.controller");
const postsController = require("./controllers/posts.controller");
const PORT = process.env.PORT || 8080;

function httpServer(req, res) {
  const app = new Express(req, res);

  // Users route
  app.get("/users", usersController.GET);

  // Todos route
  app.get("/todos", todosController.GET);

  // Todos route
  app.get("/posts", postsController.GET);
}

const server = createServer(httpServer);

server.listen(PORT, console.log(`Server ${PORT} da ishga tushdi...`));
