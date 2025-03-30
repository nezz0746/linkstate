import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@cryptoresume/ui/components/ui/select";
import { getChainImageURL } from "~/src/helpers";
import {
  constants,
  SupportedChainsIds,
} from "../../../../packages/common/dist";
import classNames from "classnames";

type SupportedChainsSelectProps = {
  onChange: (chainId: SupportedChainsIds) => void;
  value?: SupportedChainsIds;
  buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
};

const SupportedChainsSelect = ({
  onChange,
  value,
  buttonProps,
}: SupportedChainsSelectProps) => {
  const chainConfig = constants.supportedChains.find(
    ({ chain }) => chain.id === value,
  );
  return (
    <Select
      onValueChange={(value) => {
        onChange(parseInt(value) as SupportedChainsIds);
      }}
    >
      <SelectTrigger
        {...buttonProps}
        className={classNames(
          "bg-white bg-opacity-85 hover:bg-white outline-none",
          buttonProps?.className ?? "",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          {value && (
            <Image
              src={getChainImageURL(value.toString())}
              height={100}
              width={100}
              alt=""
              className="w-6 h-6"
            />
          )}
          {chainConfig?.chain.name}
        </div>
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <SelectLabel>Networks</SelectLabel>
          {constants.supportedChains.map(({ chain }) => {
            const chainId = chain.id.toString();

            return (
              <SelectItem value={chainId} key={chainId}>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Image
                    src={getChainImageURL(chainId)}
                    height={100}
                    width={100}
                    alt=""
                    className="w-6 h-6"
                  />
                  {chain.name}
                </div>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SupportedChainsSelect;
