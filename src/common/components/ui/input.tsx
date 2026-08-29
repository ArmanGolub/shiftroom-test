import { cn } from "@/common/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "bg-common-white border-gray-250 focus-visible:ring-ring flex h-7 w-full rounded-md border px-2 text-xs text-gray-800 transition-colors placeholder:text-gray-500 focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
