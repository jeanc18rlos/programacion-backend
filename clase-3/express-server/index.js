const server = require("./server.js");
const app = new server(3000);

app.listen(3000);
app.start();