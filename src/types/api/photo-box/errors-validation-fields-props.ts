type ErrorsValidationFields = {
  message: string;
  errors: {
    [key: string]: string[];
  };
};

export default ErrorsValidationFields;
