import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";
import React from "react";

import * as ApiPublication from "api/photo-box/admin/publication";
import DataTokenProps from "types/data-token-props";
import MediaProps from "types/media-props";
import PublicationCreateStyles from "./PublicationCreate.module.scss";

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

    const elementValue = (nameItem: string): string => {
      return (elements.namedItem(nameItem) as HTMLInputElement)?.value;
    };

    const params = {
      title: elementValue("title"),
      slug: elementValue("slug"),
      media_id: elementValue("media_id"),
      active: (elements.namedItem("active") as HTMLInputElement).checked,
      body: elementValue("body"),
      publish_at: elementValue("publish_at"),
    };

    if (session) {
      const publicationResponse = await ApiPublication.create(
        session.dataToken as DataTokenProps,
        params
      );

      if (publicationResponse?.data?.id) {
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
    <div className="publication-create container-fluid">
      <div className="d-flex flex-wrap justify-content-start">
        {media.map((m) => {
          return (
            <div
              key={m.id}
              className={`box-image m-2 ${PublicationCreateStyles.boxImage}`}
            >
              <img
                src={m.attributes.full_url}
                data-media-id={m.attributes.id}
                onClick={eventOnClickMedia}
              />
            </div>
          );
        })}
      </div>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PublicationCreate;
