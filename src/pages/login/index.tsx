import type { NextPage } from "next";
import Head from "next/head";
import LoginTemplate from "templates/Login";
import { getCsrfToken } from "next-auth/react";

const Login: NextPage = ({ csrfToken }) => {
  return (
    <>
      <Head>
        <title>Login | Photobox zero</title>
      </Head>
      <LoginTemplate csrfToken={csrfToken} />
    </>
  );
};

export default Login;

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
