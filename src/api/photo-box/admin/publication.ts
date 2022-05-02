import APP from "config/app";
import DataTokenProps from "types/data-token-props";
import PublicationProps from "types/publication-props";

export const create = async (
  dataToken: DataTokenProps,
  params: object
): Promise<PublicationProps | null> => {
  let card = null;

  const response = await fetch(`${APP.base_uri_api}/publication`, {
    method: "POST",
    headers: {
      Authorization: `${dataToken.token_type} ${dataToken.access_token}`,
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(params),
  });

  card = response.json();

  return card;
};
