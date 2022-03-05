import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import * as oauthToken from "api/oauth-token";
import * as apiUser from "api/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
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
      session.customer = token.customer;
      session.dataToken = token.dataToken;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.data.attributes.name;
        token.email = user.data.attributes.email;
        token.dataToken = user.data.response;
        delete user.response;
        token.user = user;
      }

      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
});
