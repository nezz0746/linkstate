import { Button } from "@cryptoresume/ui/components/ui/button";
import { useEffect, useState } from "react";

type NumberPadProps = {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
};

const NumberPad = ({ amount, setAmount }: NumberPadProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isDeleting) {
      intervalId = setInterval(() => {
        setAmount((prev) => prev.slice(0, -1));
      }, 100); // Delete every 100ms while held
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isDeleting]);

  const handleNumberClick = (num: string) => {
    if (amount.includes(".") && num === ".") return;
    if (amount === "0" && num !== ".") {
      setAmount(num);
    } else {
      setAmount((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setAmount((prev) => prev.slice(0, -1));
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "←"].map((key) => (
        <Button
          key={key}
          variant="outline"
          className="h-12 text-lg"
          onClick={() =>
            key === "←" ? handleDelete() : handleNumberClick(key.toString())
          }
          onMouseDown={() => key === "←" && setIsDeleting(true)}
          onMouseUp={() => key === "←" && setIsDeleting(false)}
          onMouseLeave={() => key === "←" && setIsDeleting(false)}
          onTouchStart={() => key === "←" && setIsDeleting(true)}
          onTouchEnd={() => key === "←" && setIsDeleting(false)}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};

export default NumberPad;
