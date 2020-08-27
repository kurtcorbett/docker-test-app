var http = require("http");

http
  .createServer(function (req, res) {
    res.write(
      JSON.stringify({
        name: "Test User",
      })
    );
    res.end();
  })
  .listen(8081);
console.log(`Dummy flow identity server started...`);