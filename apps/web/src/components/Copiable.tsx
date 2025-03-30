import { CheckIcon, Copy } from "lucide-react";
import classNames from "classnames";
import { useCopyToClipboard } from "../hooks/useClipboard";
import { Button } from "@cryptoresume/ui/components/ui/button";

type CopiableProps = {
  text: string;
  visible?: boolean;
};

const Copiable = ({ text, visible = false }: CopiableProps) => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <Button
      onClick={() => copy(text)}
      size="icon"
      variant="outline"
      className={classNames("aspect-square h-full", {
        "opacity-0 transition-opacity group-hover:opacity-100": !visible,
      })}
    >
      {copiedText === text ? (
        <CheckIcon className="h-3 w-3 fill-green-700" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  );
};

export default Copiable;
