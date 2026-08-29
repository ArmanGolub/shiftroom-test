import { Checkbox } from "@/common/components/ui";
import { useId } from "react";

type FilterOptionProps = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

export const FilterOption = ({
  label,
  checked,
  onToggle,
}: FilterOptionProps) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-gray-200"
    >
      <Checkbox id={id} checked={checked} onCheckedChange={onToggle} />
      <span className="text-default text-gray-800">{label}</span>
    </label>
  );
};
