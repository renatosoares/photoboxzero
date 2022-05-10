import APP from "config/app";
import PublicationProps from "types/publication-props";

// export const highlightPublications = async () => {
//   const publicationsResponse = fetch(
//     `${config.BASE_URI_API}/collective/publication`
//   );

//   const [publications] = await Promise.all([publicationsResponse]);

//   const publicationsJson = await publications.json();

//   return publicationsJson;
// };

// export const getPublications = async (): Promise<PublicationProps[]> => {
//   const highlight = await highlightPublications();

//   const publications = highlight.data.map(
//     (publication: ApiPublicationProps): PublicationProps => {
//       return {
//         id: publication.attributes.id,
//         title: publication.attributes.title,
//         slang: publication.attributes.slug,
//         summary: publication.attributes.body || "",
//         image: publication.relationships.media.data.attributes.full_url,
//         mediaId: publication.relationships.media.data.attributes.id,
//       };
//     }
//   );

//   return publications;
// };

export const index = async (): Promise<{ data: PublicationProps[] }> => {
  const response = await fetch(`${APP.base_uri_api}/collective/publication`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
};
