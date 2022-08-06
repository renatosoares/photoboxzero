import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getCsrfToken, getSession } from "next-auth/react";
import Dashboard from "templates/Admin/Dashboard";
import DataTokenProps from "types/data-token-props";
import ReportHeaderContextProps from "types/report-header-context-props";

type DashboardPageProps = {
  csrfToken: string;
  contextReportHeader: ReportHeaderContextProps;
};

const DashboardPage: NextPage<DashboardPageProps> = (
  props: DashboardPageProps
) => {
  return <Dashboard />;
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
      contextReportHeader: {
        title: "dashboard",
      },
    },
  };
};

export default DashboardPage;
