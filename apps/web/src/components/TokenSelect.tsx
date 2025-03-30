import { useEffect, useState } from "react";
import { Token } from "@cryptoresume/common";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@cryptoresume/ui/components/ui/select";
import Image from "next/image";
import { Address } from "viem";

type TokenSelectProps = {
  tokens: Token[];
  defaultToken?: Token;
  onChange: (token: Token) => void;
};

const TokenSelect = ({ tokens, onChange, defaultToken }: TokenSelectProps) => {
  const [selectedToken, setSelectedToken] = useState(defaultToken?.address);

  useEffect(() => {
    setSelectedToken(defaultToken?.address);
  }, [defaultToken]);

  return (
    <Select
      value={selectedToken}
      onValueChange={(address: Address) => {
        const token = tokens.find((token) => token.address === address);

        if (token) {
          setSelectedToken(address);
          onChange(token);
        }
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a token" />
      </SelectTrigger>
      <SelectContent>
        {tokens.map((token) => {
          return (
            <SelectItem key={token.address} value={token.address} className="">
              <div className="flex flex-row items-center justify-start gap-2">
                <Image
                  src={token.logoURI}
                  height={60}
                  width={60}
                  alt=""
                  className="w-6 h-6"
                />
                {token.name}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default TokenSelect;
