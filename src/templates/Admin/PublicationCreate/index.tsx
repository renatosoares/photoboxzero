import React from "react";
import MediaProps from "types/media-props";

type PublicationProps = {
  csrfToken: string;
  media: MediaProps[];
};

const PublicationCreate = ({ csrfToken }: PublicationProps) => {
  // TODO - pegar coleção de imagens.

  const eventOnSubmit = (event: React.FormEvent) => {
    console.log(event);
  };
  return (
    <div>
      <form onSubmit={eventOnSubmit}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input name="title" type="text" placeholder="Title" required />
        <input name="slug" type="text" placeholder="Slug" required />
        <input name="media_id" type="hidden" defaultValue={21} />
        <textarea name="body" />
        <input name="active" type="checkbox" />
        <textarea name="metadata" />
        <input name="publish_at" type="date" required />
        <input name="unpublish_at" type="date" />
      </form>
    </div>
  );
};

export default PublicationCreate;
