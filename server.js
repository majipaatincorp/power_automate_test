const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "formdb",
  password: "postgres",
  port: 5432,
});

// Create table if not exists
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password TEXT,
    age INT,
    gender TEXT
  );
`);

// Handle form submission
app.post("/submit", async (req, res) => {
  const { username, email, password, age, gender } = req.body;
  try {
    await pool.query(
      "INSERT INTO users (username, email, password, age, gender) VALUES ($1, $2, $3, $4, $5)",
      [username, email, password, age, gender]
    );
    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving data" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

