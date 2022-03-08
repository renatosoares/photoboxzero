type DataTokenProps = {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
};

export const defaultProps: DataTokenProps = {
  token_type: "",
  expires_in: 0,
  access_token: "",
  refresh_token: "",
};

export default DataTokenProps;
