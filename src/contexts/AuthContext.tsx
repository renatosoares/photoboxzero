import AuthContextProps from "types/auth-context-props";
import { createContext } from "react";

export const AuthContextDefault = {
  signin: () => null,
};

const AuthContext = createContext<AuthContextProps>(AuthContextDefault);

export default AuthContext;
