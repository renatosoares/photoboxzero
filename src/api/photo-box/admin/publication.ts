import APP from "config/app";
import DataTokenProps from "types/data-token-props";
import ErrorsValidationFields from "types/api/photo-box/errors-validation-fields-props";
import PublicationProps from "types/publication-props";
import ExceptionResponse from "types/api/photo-box/exception-response";

export const create = async (
  dataToken: DataTokenProps,
  params: object
): Promise<
  { data: PublicationProps } | ErrorsValidationFields | ExceptionResponse | null
> => {
  let publication = null;

  const response = await fetch(`${APP.base_uri_api}/publication`, {
    method: "POST",
    headers: {
      Authorization: `${dataToken.token_type} ${dataToken.access_token}`,
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(params),
  });

  publication = response.json();

  return publication;
};
