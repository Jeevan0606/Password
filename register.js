const bcrypt = require("bcrypt");
const fs = require("fs");
const usersDB = "users.json";
function register(username, password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    let users = [];

    if (fs.existsSync(usersDB)) {
        users = JSON.parse(fs.readFileSync(usersDB));
    }

    users.push({ username, password: hashedPassword });
    fs.writeFileSync(usersDB, JSON.stringify(users, null, 2));

    console.log("User registered successfully!");
}
register("Jeevan", "Secure");
