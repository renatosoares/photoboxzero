import React from "react";
import { useState } from "react";
import MediaProps from "types/media-props";

type PublicationProps = {
  csrfToken: string;
  media: MediaProps[];
};

const PublicationCreate = ({ csrfToken, media }: PublicationProps) => {
  const [selectedMediaId, setSelectedMediaId] = useState(0);

  const eventOnSubmit = (event: React.FormEvent) => {
    console.log(event.currentTarget);
  };

  const eventOnClickMedia = (event: React.MouseEvent<HTMLImageElement>) => {
    setSelectedMediaId(Number(event.currentTarget.dataset.mediaId));
  };

  return (
    <div>
      {media.map((m) => {
        return (
          <img
            src={m.attributes.full_url}
            key={m.id}
            data-media-id={m.attributes.id}
            onClick={eventOnClickMedia}
          />
        );
      })}
      <form onSubmit={eventOnSubmit}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input name="title" type="text" placeholder="Title" required />
        <input name="slug" type="text" placeholder="Slug" required />
        <input name="media_id" type="hidden" defaultValue={selectedMediaId} />
        <textarea name="body" />
        <input name="active" type="checkbox" />
        <textarea name="metadata" />
        <input name="publish_at" type="datetime-local" required />
        <input name="unpublish_at" type="datetime-local" />
      </form>
    </div>
  );
};

export default PublicationCreate;
