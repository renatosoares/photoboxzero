import React from "react";
import PublicationProps from "types/publication-props";

type PublicationIndexProps = {
  publications: PublicationProps[];
};

const PublicationIndex = ({ publications }: PublicationIndexProps) => {
  return (
    <div>
      {publications.map((publication) => {
        return <div key={publication.id}>{publication.attributes.title}</div>;
      })}
    </div>
  );
};

export default PublicationIndex;
