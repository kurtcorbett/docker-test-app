var http = require("http");

const PORT = 8081

http
  .createServer(function (req, res) {
    res.write(
      JSON.stringify({
        name: "Test User",
      })
    );
    res.end();
  })
  .listen(PORT);
console.log(`Server started on port ${PORT}`);