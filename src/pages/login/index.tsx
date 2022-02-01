import type { NextPage } from "next";
import Head from "next/head";
import LoginTemplate from "templates/Login";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Photobox zero</title>
      </Head>
      <LoginTemplate />
    </>
  );
};

export default Login;
