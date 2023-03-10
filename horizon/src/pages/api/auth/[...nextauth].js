import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../../database/conn";
import Users from "../../../../model/Schema";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectDB("UsersData").catch((error) =>
          res.json({ error: error.message })
        );

        // check if user exists
        const user = await Users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found");
        }

        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordCorrect || user.email !== credentials.email) {
          throw new Error("Username or password is incorrect");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
