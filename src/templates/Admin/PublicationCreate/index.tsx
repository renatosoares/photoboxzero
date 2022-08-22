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
              {/* TODO as imagens deve se listadas em tamanhos padrões e ao clicar exibir em modal com a opção de selecionar */}
              <img
                src={m.attributes.full_url}
                data-media-id={m.attributes.id}
                onClick={eventOnClickMedia}
              />
            </div>
          );
        })}
      </div>
      <div className="sticky-bottom text-bg-dark p-3 container">
        <form className="row g-3" onSubmit={eventOnSubmit}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <input
            name="media_id"
            type="hidden"
            className="form-control"
            id="input-media-id"
            defaultValue={selectedMediaId}
          />
          <div className="col-md-6">
            <label htmlFor="input-title" className="form-label">
              Title
            </label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="input-title"
              placeholder="Title"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="input-slug" className="form-label">
              Slug
            </label>
            <input
              name="slug"
              type="text"
              className="form-control"
              id="input-slug"
              placeholder="Slug"
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="input-body" className="form-label">
              Body
            </label>
            <textarea
              name="body"
              className="form-control"
              id="input-body"
              rows={3}
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="input-metadata" className="form-label">
              Metadata
            </label>
            <textarea
              name="metadata"
              className="form-control"
              id="input-metadata"
              rows={3}
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="input-publish-at" className="form-label">
              Publish At
            </label>
            <input
              name="publish_at"
              type="datetime-local"
              className="form-control"
              id="input-publish-at"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="input-unpublish-at" className="form-label">
              Unpublish At
            </label>
            <input
              className="form-control"
              name="unpublish_at"
              type="datetime-local"
              id="input-unpublish-at"
            />
          </div>
          <div className="col-12">
            <div className="form-check float-end">
              <input
                name="active"
                className="form-check-input"
                type="checkbox"
                id="input-active"
                defaultChecked={true}
              />
              <label className="form-check-label" htmlFor="input-active">
                Active
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublicationCreate;
