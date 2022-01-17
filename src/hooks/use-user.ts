import UserProps from "models/types/UserProps";
import objectIsEmpty from "utils/objectIsEmpty";
import { retrieveOauthToken } from "./oauth-token";

const BASE_URI = process.env.REACT_APP_BASE_URI_API;

export const retrieve = async (): Promise<UserProps> => {
  const dataToken = retrieveOauthToken();
  let user = new Promise<UserProps>(() => {});

  if (!objectIsEmpty(dataToken)) {
    const response = await fetch(`${BASE_URI}user`, {
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
