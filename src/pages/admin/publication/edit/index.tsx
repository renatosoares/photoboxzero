import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getCsrfToken } from "next-auth/react";
import PublicationEdit from "templates/Admin/PublicationEdit";

type PublicationEditPageProps = {
  csrfToken: string;
};

const PublicationEditPage: NextPage<PublicationEditPageProps> = (
  props: PublicationEditPageProps
) => {
  return <PublicationEdit csrfToken={props.csrfToken} />;
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

export default PublicationEditPage;
