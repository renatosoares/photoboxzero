import UserProps from "types/user-props";

type AuthContextProps = {
  user?: UserProps | null;
  signin: (email: string, password: string) => void;
};

export default AuthContextProps;
