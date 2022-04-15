import React from "react";

import PublicationProps from "types/publication-props";
import CollectionStyles from "./Collection.module.scss";

type CollectionProps = {
  publications: PublicationProps[];
};

const Collection = ({ publications }: CollectionProps) => {
  return (
    <div className={`collection container ${CollectionStyles.collection}`}>
      <div
        className={`wrap-publication d-flex flex-wrap justify-content-evenly ${CollectionStyles.wrapPublication}`}
      >
        {publications.map((publication) => (
          <div
            className={`publication-content m-2 ${CollectionStyles.publicationContent}`}
            key={publication.relationships.media.data.attributes.id}
          >
            <img
              src={publication.relationships.media.data.attributes.full_url}
              alt="photo_box"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
