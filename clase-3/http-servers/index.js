const http = require("http");

const server = http.createServer((req, res) => {
  req.on("data", (chunk) => {
    console.dir(chunk.toString());
    res.end(JSON.stringify({ message: "Hello sss", dat: chunk.toString() }));
  });
});

server.listen(3000, ()=> {
    console.log("Server runn ng on port 3000");
    console.log(process.argv.slice(2))
});
