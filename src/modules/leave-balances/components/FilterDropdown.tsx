import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { FilterOption } from "./FilterOption";

type FilterDropdownProps = {
  label: string;
  placeholder: string;
  options: string[];
};

export const FilterDropdown = ({
  label,
  placeholder,
  options,
}: FilterDropdownProps) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const matches = options.filter((option) =>
    option.toLowerCase().includes(query.trim().toLowerCase())
  );
  const checkedOptions = matches.filter((option) => selected.includes(option));
  const uncheckedOptions = matches.filter(
    (option) => !selected.includes(option)
  );

  const toggle = (option: string) =>
    setSelected((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );

  return (
    <Popover>
      <PopoverTrigger className="bg-common-white border-gray-250 focus-visible:ring-ring flex h-9 w-56 items-center gap-2 rounded-lg border pr-2 pl-3 text-sm transition-colors focus-visible:ring-1 focus-visible:outline-hidden">
        <span className="text-gray-500">{label}:</span>
        <span className="truncate text-gray-800">
          {selected.length ? selected.join(", ") : placeholder}
        </span>
        <ChevronDown className="ml-auto shrink-0 text-gray-600" />
      </PopoverTrigger>

      <PopoverContent className="w-(--radix-popover-trigger-width) min-w-72 p-1.5">
        <div className="flex items-center gap-3 py-1 pl-2">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="h-9 rounded-lg text-sm"
          />
          <button
            type="button"
            onClick={() => setSelected([])}
            className="text-error hover:text-error-600 shrink-0 px-2 text-sm transition-colors"
          >
            Reset
          </button>
        </div>

        <div className="max-h-64 overflow-y-auto pb-2">
          {checkedOptions.map((option) => (
            <FilterOption
              key={option}
              label={option}
              checked
              onToggle={() => toggle(option)}
            />
          ))}

          {checkedOptions.length > 0 && uncheckedOptions.length > 0 && (
            <div className="bg-gray-250 my-2 h-px" />
          )}

          {uncheckedOptions.map((option) => (
            <FilterOption
              key={option}
              label={option}
              checked={false}
              onToggle={() => toggle(option)}
            />
          ))}

          {matches.length === 0 && (
            <p className="px-2 py-6 text-center text-sm text-gray-500">
              Nothing found
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
