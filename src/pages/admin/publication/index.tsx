import { GetServerSideProps, NextPage } from "next";
import PublicationIndex from "templates/Admin/PublicationIndex";
import PublicationProps from "types/publication-props";
import ReportHeaderContextProps from "types/report-header-context-props";

type PublicationPageProps = {
  publications: PublicationProps[];
  contextReportHeader: ReportHeaderContextProps;
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
      contextReportHeader: {
        title: "publications/create",
        actions: [
          {
            label: "create",
            pathName: "/admin/publication/create",
          },
        ],
      },
    },
  };
};

export default PublicationPage;
