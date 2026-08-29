import { cn } from "@/common/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium leading-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-common-white",
        secondary: "bg-secondary text-secondaryForeground",
        destructive: "bg-destructive text-common-white",
        outline: "border text-foreground",
      },
      size: {
        default: "px-2 py-1 text-xs",
        count: "min-w-4 px-1 py-0.5 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export const Badge = ({ className, variant, size, ...props }: BadgeProps) => (
  <span
    className={cn(badgeVariants({ variant, size }), className)}
    {...props}
  />
);
