import bcrypt
import sqlite3
def verify_password(input_password: str, stored_hash: str) -> bool:
    return bcrypt.checkpw(input_password.encode(), stored_hash.encode())
def authenticate_user(username: str, password: str):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT password FROM users WHERE username=?", (username,))
    user = cursor.fetchone()
    conn.close()
    if user and verify_password(password, user[0]):
        print("Login successful!")
    else:
        print("Invalid username or password!")
authenticate_user("Jeevan", "1234")
