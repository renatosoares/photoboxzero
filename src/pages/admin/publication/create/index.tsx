import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getCsrfToken, getSession } from "next-auth/react";
import PublicationCreate from "templates/Admin/PublicationCreate";
import MediaProps from "types/media-props";
import * as ApiAdminMedia from "api/photo-box/admin/media";
import DataTokenProps from "types/data-token-props";
import ReportHeaderContextProps from "types/report-header-context-props";

type PublicationCreatePageProps = {
  csrfToken: string;
  media: MediaProps[];
  contextReportHeader: ReportHeaderContextProps;
};

const PublicationCreatePage: NextPage<PublicationCreatePageProps> = (
  props: PublicationCreatePageProps
) => {
  return <PublicationCreate csrfToken={props.csrfToken} media={props.media} />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  const dataToken = session?.dataToken as DataTokenProps;

  return {
    props: {
      csrfToken: await getCsrfToken(context),
      media: await (await ApiAdminMedia.index(dataToken)).data,
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

export default PublicationCreatePage;
