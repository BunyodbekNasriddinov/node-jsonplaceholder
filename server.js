const { createServer } = require("http");
const Express = require("./lib/express");
const PORT = process.env.PORT || 8080;

function httpServer(req, res) {
  const app = new Express(req, res);
  app.get("/", (req, res) => {
    console.log("assa");
    res.write("salom");
    res.end("Goodbye world");
  });
}

const server = createServer(httpServer);

server.listen(PORT, console.log(`Server ${PORT} da ishga tushdi...`));
