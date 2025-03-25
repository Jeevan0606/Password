const bcrypt = require("bcrypt");
const fs = require("fs");
const usersDB = "users.json";

function register(username, password) {
    let users = [];

    if (fs.existsSync(usersDB)) {
        users = JSON.parse(fs.readFileSync(usersDB));
    }

    if (users.some(u => u.username === username)) {
        console.log("Username already exists. Choose a different one.");
        return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword });
    fs.writeFileSync(usersDB, JSON.stringify(users, null, 2));

    console.log("User registered successfully!");
}

register("Jeevan", "Secure");
