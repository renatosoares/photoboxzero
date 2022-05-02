import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";
import React from "react";

import * as ApiPublication from "api/photo-box/admin/publication";
import DataTokenProps from "types/data-token-props";
import MediaProps from "types/media-props";

type PublicationProps = {
  csrfToken: string;
  media: MediaProps[];
};

const PublicationCreate = ({ csrfToken, media }: PublicationProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [selectedMediaId, setSelectedMediaId] = useState(0);

  const eventOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const elements = (event.target as HTMLFormElement)
      .elements as HTMLFormControlsCollection;

    console.log(elements);

    const elementValue = (nameItem: string): string => {
      return (elements.namedItem(nameItem) as HTMLInputElement)?.value;
    };

    // TODO pegar de forma dinâmica.
    const params = {
      title: elementValue("title"),
      slug: elementValue("slug"),
      media_id: elementValue("media_id"),
      active: elementValue("active"),
      body: elementValue("body"),
      publish_at: elementValue("publish_at"),
    };

    if (session) {
      const publicationResponse = await ApiPublication.create(
        session.dataToken as DataTokenProps,
        params
      );

      if (publicationResponse?.id) {
        router.push({
          pathname: "/admin/publication",
        });
      } else {
        console.error(publicationResponse);
      }
    }
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
