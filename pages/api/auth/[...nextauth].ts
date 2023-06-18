import { Session, User } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface UserWithUID extends User {
  username: string;
  uid: string;
}

declare module "next-auth" {
  interface Session {
    user: UserWithUID;
  }
}

export default NextAuth({
  callbacks: {
    async session({ session, token }) {
      const user = session.user as UserWithUID;
      user.username = user.name
        ? user.name.split(" ").join("").toLocaleLowerCase()
        : ""; // Assign empty string if user.name is undefined
      user.uid = token.sub ?? ""; // Assign empty string if token.sub is undefined
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "", // Assign empty string if GOOGLE_CLIENT_ID is undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "", // Assign empty string if GOOGLE_CLIENT_SECRET is undefined
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
