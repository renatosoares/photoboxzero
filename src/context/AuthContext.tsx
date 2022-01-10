import AuthContextProps from "models/types/AuthContextProps";
import { createContext } from "react";

export const AuthContextDefault = {
  signin: () => null,
};

const AuthContext = createContext<AuthContextProps>(AuthContextDefault);

export default AuthContext;
