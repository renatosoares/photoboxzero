import APP from "config/app";
import DataTokenProps from "types/data-token-props";
import MediaProps from "types/media-props";

export const index = async (
  dataToken: DataTokenProps
): Promise<{ data: MediaProps[] }> => {
  const response = await fetch(`${APP.base_uri_api}/media`, {
    method: "GET",
    headers: {
      Authorization: `${dataToken.token_type} ${dataToken.access_token}`,
      "content-type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
};
