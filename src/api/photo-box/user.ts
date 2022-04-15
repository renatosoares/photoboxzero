import APP from "config/app";
import type DataTokenProps from "types/data-token-props";
import UserProps from "types/user-props";
import objectIsEmpty from "utils/objectIsEmpty";

export const retrieve = async (
  dataToken: DataTokenProps
): Promise<UserProps> => {
  let user = new Promise<UserProps>(() => {});

  if (!objectIsEmpty(dataToken)) {
    const response = await fetch(`${APP.base_uri_api}/user`, {
      method: "GET",
      headers: {
        Authorization: `${dataToken.token_type} ${dataToken.access_token}`,
        "content-type": "application/json",
        Accept: "application/json",
      },
    });

    user = response.json();
  }

  return user;
};
