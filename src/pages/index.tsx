import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeTemplate from "templates/Home";
import { useEffect, useState } from "react";
import PublicationProps from "types/publication-props";
import { getPublications } from "hooks/publications";

const Home: NextPage = () => {
  const [publications, setPublications] = useState<PublicationProps[]>([]);

  useEffect(() => {
    (async () => {
      setPublications(await getPublications());
    })();
  }, []);
  return (
    <>
      <Head>
        <title>Photobox zero</title>
        <meta name="description" content="photo stock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate publications={publications} />
    </>
  );
};

export default Home;
