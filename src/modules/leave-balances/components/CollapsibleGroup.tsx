import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/common/components/ui";
import { cn } from "@/common/lib/utils";
import { ChevronUp } from "lucide-react";

type CollapsibleGroupProps = {
  label: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export const CollapsibleGroup = ({
  label,
  open,
  onOpenChange,
  children,
}: CollapsibleGroupProps) => (
  <Collapsible open={open} onOpenChange={onOpenChange}>
    <CollapsibleTrigger className="bg-primary-light text-default flex h-10.25 w-full items-center gap-2 rounded-lg px-4 font-medium text-gray-800 transition-colors">
      <ChevronUp
        className={cn("shrink-0 transition-transform", !open && "rotate-180")}
      />
      {label}
    </CollapsibleTrigger>

    <CollapsibleContent>{children}</CollapsibleContent>
  </Collapsible>
);
