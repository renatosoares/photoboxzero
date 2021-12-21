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
  const [email, setEmail] = useState<string>("");
  const [dataToken, setDataToken] = useState<DataTokenProps>();

  const signin = (email: string, password: string) => {
    const response = oauthToken.signInWithEmailAndPassword(email, password);
    response.then((r) => {
      setDataToken(r);
      setEmail(email);
    });
  };

  useEffect(() => {
    if (dataToken) {
      oauthToken.storeOauthToken(dataToken);

      if (email) {
        // TODO - precisará ser adicionado na sessão ou no local storage.
        oauthToken.retrieveUserWithEmail(email).then((responseUser) => {
          setUser(responseUser);
        });
      }
    }
  }, [dataToken, email]);

  return {
    user,
    signin,
  };
}
