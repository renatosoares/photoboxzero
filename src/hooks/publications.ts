import ApiPublicationProps from "models/types/ApiPublicationProps";
import publicationProps from "models/types/publicationProps";

const BASE_URI = process.env.REACT_APP_BASE_URI_API;

export const highlightPublications = async () => {
  const publicationsResponse = fetch(`${BASE_URI}public/publication`);

  const [publications] = await Promise.all([publicationsResponse]);

  const publicationsJson = await publications.json();

  return publicationsJson;
};

export const getPublications = async (): Promise<publicationProps[]> => {
  const highlight = await highlightPublications();

  const publications = highlight.data.map(
    (publication: ApiPublicationProps): publicationProps => {
      return {
        id: publication.attributes.id,
        title: publication.attributes.title,
        slang: publication.attributes.slug,
        summary: publication.attributes.body || "",
        image: publication.relationships.media.data.attributes.full_url,
        mediaId: publication.relationships.media.data.attributes.id,
      };
    }
  );

  return publications;
};
