import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import * as oauthToken from "api/photo-box/oauth-token";
import * as apiUser from "api/photo-box/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const response = await oauthToken.signInWithEmailAndPassword(
          username,
          password
        );

        const user = await apiUser.retrieve(response);

        if (user) {
          return { ...user, response };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      session.dataToken = token.dataToken;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.data.attributes.name;
        token.email = user.data.attributes.email;
        token.dataToken = user.response;
        delete user.response;
        token.user = user.data;
      }

      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
});
