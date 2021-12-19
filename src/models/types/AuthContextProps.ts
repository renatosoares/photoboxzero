import UserProps from "models/types/UserProps";

type AuthContextProps = {
  user?: UserProps | null;
  signin: (email: string, password: string) => void;
};

export default AuthContextProps;
