import React, { useEffect, useState } from "react";

import HomePage from "components/pages/Home";

import { getPublications } from "hooks/publications";
import publicationProps from "models/types/publicationProps";

const Home = () => {
  const [publications, setPublications] = useState<publicationProps[]>([]);

  useEffect(() => {
    (async () => {
      setPublications(await getPublications());
    })();
  }, []);

  return <HomePage publications={publications} />;
};

export default Home;
