import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getCsrfToken } from "next-auth/react";
import PublicationCreate from "templates/Admin/PublicationCreate";

type PublicationCreatePageProps = {
  csrfToken: string;
};

const PublicationCreatePage: NextPage<PublicationCreatePageProps> = (
  props: PublicationCreatePageProps
) => {
  return <PublicationCreate csrfToken={props.csrfToken} />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

export default PublicationCreatePage;
