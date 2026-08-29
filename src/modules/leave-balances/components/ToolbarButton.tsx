import { cn } from "@/common/lib/utils";

type ToolbarButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ToolbarButton = ({ className, ...props }: ToolbarButtonProps) => (
  <button
    type="button"
    className={cn(
      "bg-common-white border-gray-250 focus-visible:ring-ring flex h-9 items-center justify-center gap-2 rounded-lg border px-3 text-sm text-gray-800 transition-colors hover:bg-gray-100 focus-visible:ring-1 focus-visible:outline-hidden",
      className
    )}
    {...props}
  />
);
