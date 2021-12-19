import AuthContext from "context/AuthContext";
import AuthContextProps from "models/types/AuthContextProps";
import DataTokenProps from "models/types/DataTokenProps";
import UserProps from "models/types/UserProps";
import React, { useState, useEffect, useContext, createContext } from "react";
import * as oauthToken from "./oauth-token";

type ProvideAuthProps = {
  children: React.ReactNode;
};

export function ProvideAuth({ children }: ProvideAuthProps) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextProps => {
  return useContext<AuthContextProps>(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<UserProps | null>();
  const [dataToken, setDataToken] = useState<DataTokenProps>();

  const signin = (email: string, password: string) => {
    const response = oauthToken.signInWithEmailAndPassword(email, password);
    response.then((r) => {
      setDataToken(r);
      oauthToken
        .retrieveUserWithEmail(email)
        .then((responseUser) => setUser(responseUser));
    });
  };

  useEffect(() => {
    dataToken && oauthToken.storeOauthToken(dataToken);
  }, [dataToken]);

  return {
    user,
    signin,
  };
}
