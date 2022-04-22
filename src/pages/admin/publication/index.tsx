import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getCsrfToken } from "next-auth/react";
import Publication from "templates/Admin/Publication";

type PublicationPageProps = {
  csrfToken: string;
};

const PublicationPage: NextPage<PublicationPageProps> = (
  props: PublicationPageProps
) => {
  return <Publication csrfToken={props.csrfToken} />;
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

export default PublicationPage;
