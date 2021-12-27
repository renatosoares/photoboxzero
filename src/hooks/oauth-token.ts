import DataTokenProps from "models/types/DataTokenProps";
import UserProps from "models/types/UserProps";
import { useState } from "react";

const BASE_URI = process.env.REACT_APP_BASE_URI_API;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<DataTokenProps> => {
  const body = {
    grant_type: "password",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    username: email,
    password: password,
    scope: "",
  };

  const response = await fetch(`${BASE_URI}oauth/token`, {
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

export const storeOauthToken = (dataToken: DataTokenProps) => {
  localStorage.setItem("data_token", JSON.stringify(dataToken));
};

export const retrieveOauthToken = (): DataTokenProps => {
  return JSON.parse(localStorage.getItem("data_token") || "{}");
};
