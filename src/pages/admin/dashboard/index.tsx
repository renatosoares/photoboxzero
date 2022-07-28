import type { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getCsrfToken, getSession } from "next-auth/react";
import Dashboard from "templates/Admin/Dashboard";
import DataTokenProps from "types/data-token-props";
import type { NextPageWithLayout } from "types/next-page-with-layout";
import Layout from "layouts/Layout";

type DashboardPageProps = {
  csrfToken: string;
};

const DashboardPage: NextPageWithLayout<DashboardPageProps> = (
  props: DashboardPageProps
) => {
  return <Dashboard />;
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  const dataToken = session?.dataToken as DataTokenProps;

  console.log(dataToken);

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

export default DashboardPage;
