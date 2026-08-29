import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui";
import { Search } from "lucide-react";

const gradientBorder = {
  background:
    "linear-gradient(var(--background), var(--background)) padding-box, var(--gradient-primary) border-box",
};

export const SearchButton = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        type="button"
        aria-label="Search"
        style={gradientBorder}
        className="flex size-10.25 items-center justify-center rounded-xl border border-transparent text-gray-600 transition-colors hover:text-gray-800"
      >
        <Search />
      </button>
    </TooltipTrigger>
    <TooltipContent side="right">Search</TooltipContent>
  </Tooltip>
);
