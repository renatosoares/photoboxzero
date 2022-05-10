import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getCsrfToken, getSession } from "next-auth/react";
import AdminIndex from "templates/Admin/AdminIndex";
import DataTokenProps from "types/data-token-props";

type AdminPageProps = {
  csrfToken: string;
};

const AdminPage: NextPage<AdminPageProps> = (props: AdminPageProps) => {
  return <AdminIndex />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  const dataToken = session?.dataToken as DataTokenProps;

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

export default AdminPage;
