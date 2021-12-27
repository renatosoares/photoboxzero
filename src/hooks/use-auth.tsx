import AuthContext from "context/AuthContext";
import AuthContextProps from "models/types/AuthContextProps";
import DataTokenProps from "models/types/DataTokenProps";
import UserProps from "models/types/UserProps";
import React, { useState, useEffect, useContext, createContext } from "react";
import objectIsEmpty from "utils/objectIsEmpty";
import * as oauthToken from "./oauth-token";
import * as useUser from "./use-user";

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
    });
  };

  useEffect(() => {
    if (dataToken) {
      oauthToken.storeOauthToken(dataToken);

      useUser.retrieve().then((responseUser) => {
        setUser(responseUser);
      });
    }
  }, [dataToken]);

  useEffect(() => {
    if (user) {
      useUser.storeLocal(user);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      if (!objectIsEmpty(useUser.retrieveLocal())) {
        setUser(useUser.retrieveLocal());
      }

      if (!objectIsEmpty(oauthToken.retrieveOauthToken())) {
        useUser.retrieve().then((responseUser) => {
          setUser(responseUser);
        });
      }
    }
  }, []);

  return {
    user,
    signin,
  };
}
