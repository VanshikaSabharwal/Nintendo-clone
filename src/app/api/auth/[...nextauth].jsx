import NextAuth from "nextauth";
import Providers from "next-auth/providers";
import dotenv from "dotenv";

dotenv.config();

export const authOptions = {
  providers: [
    Providers.Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials;
        //here you should verify the users credentials with database

        const user = await getUserByEmail(email);
        if (user && bcrypt.compareSync(password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: "/auth/signIn",
  },
};
export default NextAuth(authOptions);

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

async function getUserByEmail(email) {
  const result = await pool.query("SELECT * FROM user WHERE email =$1", [
    email,
  ]);
  return result.rows[0];
}
