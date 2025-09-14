# 🔐 Multi-Factor Authentication (MFA) System

A secure and user-friendly Multi-Factor Authentication system built using **Node.js**, **Express**, **MongoDB**, and **Speakeasy**, with an EJS-based frontend. This system enhances login security by requiring users to authenticate with both a password and a Time-based One-Time Password (TOTP) from an authenticator app (like Google Authenticator).

---

## 🚀 Features

- ✅ User Registration and Login
- 🔐 Two-Factor Authentication (2FA) via TOTP
- 🧠 Secure password hashing using bcrypt
- 📱 Compatible with authenticator apps (Google Authenticator, Authy, etc.)
- 🧾 Session-based login management with Express sessions
- 📦 MongoDB Compass for data persistence
- 🛡️ Protected routes using custom middleware

---

## 🛠️ Tech Stack

| Technology      | Purpose                          |
|------------------|----------------------------------|
| Node.js         | Backend runtime                  |
| Express.js      | Web framework                    |
| MongoDB         | NoSQL database                   |
| Mongoose        | MongoDB ORM                      |
| Speakeasy       | TOTP-based 2FA                   |
| bcrypt          | Password hashing                 |          |
| Express-Session | Session management               |

---


## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/AnayGupta-45/Multi-Factor-Authentication-System.git

# Navigate to the project folder
cd Multi-Factor-Authentication-System

# Install dependencies
npm install

# Add a .env file and configure the following:
# PORT=3000
# MONGODB_URI=your_mongodb_connection_string
# SESSION_SECRET=your_session_secret

# Run the server
npm start


