import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import HomeTemplate from "templates/Home";
import PublicationProps from "types/publication-props";
import * as ApiPublication from "api/photo-box/collective/publication";

type HomePageProps = {
  publications: PublicationProps[];
};

const HomePage: NextPage<HomePageProps> = (props: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Photobox zero</title>
        <meta name="description" content="photo stock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate publications={props.publications} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      publications: (await ApiPublication.index()).data,
    },
  };
};

export default HomePage;
