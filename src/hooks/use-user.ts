import config from "config";
import UserProps from "types/user-props";
import objectIsEmpty from "utils/objectIsEmpty";
import { retrieveOauthToken } from "./oauth-token";

export const retrieve = async (): Promise<UserProps> => {
  const dataToken = retrieveOauthToken();
  let user = new Promise<UserProps>(() => {});

  if (!objectIsEmpty(dataToken)) {
    const response = await fetch(`${config.BASE_URI_API}user`, {
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

export const storeLocal = (user: UserProps) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const retrieveLocal = (): UserProps => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};
