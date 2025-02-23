import bcrypt
import sqlite3
def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode(), salt).decode()
def store_user(username: str, password: str):
    hashed_pwd = hash_password(password)
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)")
    cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_pwd))
    conn.commit()
    conn.close()
    print("User registered successfully!")
store_user("Jeevan", "1234")
