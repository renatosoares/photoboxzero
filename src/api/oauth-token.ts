import DataTokenProps from "types/data-token-props";
import config from "config";

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<DataTokenProps> => {
  const body = {
    grant_type: "password",
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    username: email,
    password: password,
    scope: "",
  };

  const response = await fetch(`${config.BASE_URI_API}oauth/token`, {
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
};

export const signOut = () => {
  // TODO
};

export const sendPasswordResetEmail = (email: string) => {
  // TODO
};

export const confirmPasswordReset = (code: string, password: string) => {
  // TODO
};

export const onAuthStateChanged = (callback: () => {}): (() => {}) => {
  return callback;
};
