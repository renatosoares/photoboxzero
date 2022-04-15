import DataTokenProps from "types/data-token-props";
import APP from "config/app";

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<DataTokenProps> => {
  const body = {
    grant_type: "password",
    client_id: APP.client_id,
    client_secret: APP.client_secret,
    username: email,
    password: password,
    scope: "",
  };

  const response = await fetch(`${APP.base_uri_api}/oauth/token`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  return response.json();
};

export const createUserWithEmailAndPassword = (
  email: string,
  password: string
) => {
  // TODO
  throw new Error("The function has not been implemented.");
};

export const signOut = () => {
  // TODO
  throw new Error("The function has not been implemented.");
};

export const sendPasswordResetEmail = (email: string) => {
  // TODO
  throw new Error("The function has not been implemented.");
};

export const confirmPasswordReset = (code: string, password: string) => {
  // TODO
  throw new Error("The function has not been implemented.");
};

export const onAuthStateChanged = (callback: () => {}): (() => {}) => {
  return callback;
};
