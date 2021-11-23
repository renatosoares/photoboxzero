import React from "react";

import publicationProps from "models/types/publicationProps";
import "./styles.scss";

type CollectionProps = {
  publications: publicationProps[];
};

const Collection = ({ publications }: CollectionProps) => {
  return (
    <div className="collection container">
      <div className="wrap-publication d-flex flex-wrap justify-content-evenly">
        {publications.map((publication) => (
          <div className="publication-content m-2" key={publication.mediaId}>
            <img src={publication.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
