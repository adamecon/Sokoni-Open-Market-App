import NextAuth from "next-auth";
import User from "../../../models/user";
import db from "../../../utils/database";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }: any) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: any) {
        await db.connect;
        const user = await User.findOne({
          email: credentials.email,
        });
        await db.disconnect();
      },
    }),
  ],
});
