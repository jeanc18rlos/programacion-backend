const http = require("http");
const User = require("./user");
const genHash = require("./hashService");

const db = {
  users: [],
};

const server = http.createServer((req, res) => {
  req.on("data", async (chunk) => {
    const data = JSON.parse(chunk.toString());
    const { name, username, password, email, lastName } = data;

    const user = new User(
      await genHash(username),
      name,
      lastName,
      email,
      username,
      await genHash(password)
    );

    db[user.id] = user;
  });

  res.end(JSON.stringify({ users: db }));
});

module.exports = server;
