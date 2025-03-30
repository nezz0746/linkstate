import { Input } from "@cryptoresume/ui/components/ui/input";
import { Search } from "lucide-react";

type SearchBarProps = {
  onChange: (value: string) => void;
};

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="relative flex w-full">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search by sender address"
        className="rounded-lg pl-8 w-full bg-white bg-opacity-85"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
