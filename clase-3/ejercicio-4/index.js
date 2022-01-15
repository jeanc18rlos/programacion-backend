const server = require("./server.js")

server.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log(process.argv.slice(2));
});
