import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import * as oauthToken from "api/photo-box/oauth-token";

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

        if (response?.access_token) {
          return response;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.dataToken = token.dataToken;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.dataToken = user.response;
        delete user.response;
      }

      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
});
