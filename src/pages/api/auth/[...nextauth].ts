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
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
});
