import React from "react";

import publicationProps from "models/types/publicationProps";

type CollectionProps = {
  publications: publicationProps[];
};

const Collection = ({ publications }: CollectionProps) => {
  return (
    <div className="collection">
      <div className="container">
        {publications.map((publication) => (
          <div className="post-content" key={publication.mediaId}>
            <img src={publication.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
