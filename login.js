const bcrypt = require("bcrypt");
const fs = require("fs");
const usersDB = "users.json";
function login(username, password) {
    if (!fs.existsSync(usersDB)) {
        console.log("No users found. Please register first.");
        return;
    }
    const users = JSON.parse(fs.readFileSync(usersDB));
    const user = users.find(u => u.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        console.log("Invalid username or password!");
    } else {
        console.log("Login successful!");
    }
}
login("Jeevan", "secure");
