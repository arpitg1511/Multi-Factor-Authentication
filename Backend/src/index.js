// At the very top of Backend/src/index.js

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

// This block correctly creates __dirname for use in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This line now correctly finds the .env file in the /src directory
dotenv.config({ path: path.join(__dirname, '.env') });

// All other imports follow
import express, { json, urlencoded } from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import "./config/passportConfig.js";

// Security check: Ensure the session secret is loaded before continuing
if (!process.env.SESSION_SECRET) {
  console.error("FATAL ERROR: SESSION_SECRET is not defined. Shutting down.");
  process.exit(1);
}

// Connect to the database
dbConnect();

const app = express();

// Middlewares
const corsOptions = {
  origin: process.env.CLIENT_URL, // Use the dynamic URL from environment variables
  credentials: true,
};
app.use(cors(corsOptions));
app.use(json({ limit: "100mb" }));
app.use(urlencoded({ limit: "100mb", extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60, // 1 hour
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);

// Listen app
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
