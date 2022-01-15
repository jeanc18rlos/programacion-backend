const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

dotenv.config();

const { MY_SALT } = process.env;

const salt = bcrypt.genSaltSync(parseInt(MY_SALT));

const db = {};

const genHash = async (data) => {
  try {
    const res = await bcrypt.hash(data, salt);
    return res;
  } catch (error) {
    return error;
  }
};
// { id: 1, name: 'John', 'lastName': 'doe', email: 'jhondoe@gmail.com', username jdoe', password: '12345' }
class User {
  constructor(id, name, lastName, email, username, password) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}

(async () => {
  const users = [];

  const user = new User(
    await genHash("PauNort"),
    "Paul",
    "Norton",
    "Pauln"+ "@gmail.com",
    "PauNort",
    await genHash("12345")
  );
  await users.push(user);
  db.users = users;
  console.log(db);
})();
