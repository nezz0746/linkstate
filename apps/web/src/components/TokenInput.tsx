import React from "react";
import { Input } from "@cryptoresume/ui/components/ui/input";

type TokenInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TokenInput: React.FC<TokenInputProps> = (props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      e.target.value = value;
    } else {
      e.target.value = value.slice(0, -1);
    }
    props.onChange?.(e);
  };

  return (
    <Input
      {...props}
      className=""
      type="text"
      onChange={handleInputChange}
      pattern="^\d*\.?\d*$"
      inputMode="decimal"
    />
  );
};

export default TokenInput;
