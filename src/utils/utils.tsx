type DetectRequiredProps = {
  required: boolean;
  value: string | number;
};

export const detectRequired = ({ required, value }: DetectRequiredProps) => {
  if (required && !value) {
    return "Please fill the required field";
  }
};
