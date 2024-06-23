import { Pool } from "pg";
import { getServerSessions } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
});

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(405).end();
  }
  const { name, email, password } = req.body;
  const session = await getServerSessions(req, res, authOptions);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO user (name,email,password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, hashedPassword]
    );
    if (session) {
      res.status(200).json({
        content:
          "This is protected content.You can access this content because you are signed in",
        data: result.rows[0],
      });
    } else {
      res.status(401).json({
        error:
          "You must be signed in to view the protected content on this page.",
      });
    }
  } catch (error) {
    console.log("Database error: ", error);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
}
