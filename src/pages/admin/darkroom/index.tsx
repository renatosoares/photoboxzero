import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import DarkroomTemplate from "templates/Darkroom";
import DataTokenProps from "types/data-token-props";

type DarkroomPageProps = {
  dataToken: DataTokenProps;
};

const DarkroomPage: NextPage<DarkroomPageProps> = (
  props: DarkroomPageProps
) => {
  return <DarkroomTemplate dataToken={props.dataToken} />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);

  return {
    props: {
      dataToken: session?.dataToken,
    },
  };
};

export default DarkroomPage;
