import { Input } from "@cryptoresume/ui/components/ui/input";
import { truncateAddress } from "../helpers";
import Copiable from "./Copiable";

type CopiableInputProps = {
  text: string;
  label?: string;
  truncate?: boolean;
};

const CopiableInput = ({ text, label, truncate }: CopiableInputProps) => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-2">
      {label && <p className="text-nowrap font-body">{label}</p>}
      <Input
        className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
        disabled
        placeholder={truncate ? truncateAddress(text) : text}
      />
      <Copiable visible text={text} />
    </div>
  );
};

export default CopiableInput;
