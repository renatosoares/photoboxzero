import { GetServerSideProps, NextPage } from "next";
import PublicationIndex from "templates/Admin/PublicationIndex";
import PublicationProps from "types/publication-props";

type PublicationPageProps = {
  publications: PublicationProps[];
};

const PublicationPage: NextPage<PublicationPageProps> = (
  props: PublicationPageProps
) => {
  return <PublicationIndex publications={props.publications} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      publications: [],
    },
  };
};

export default PublicationPage;
