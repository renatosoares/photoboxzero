import { NextPage } from "next";
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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      dataToken: session?.dataToken,
    },
  };
}

export default DarkroomPage;
