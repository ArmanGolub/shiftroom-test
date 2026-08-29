import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui";
import { cn } from "@/common/lib/utils";
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type RailLinkProps = {
  to: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
};

export const RailLink = ({
  to,
  label,
  icon: Icon,
  active,
  onClick,
}: RailLinkProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Link
        to={to}
        aria-label={label}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
        className={cn(
          "flex size-10.25 items-center justify-center rounded-xl transition-colors",
          active
            ? "bg-primary-lighter text-primary"
            : "text-gray-500 hover:bg-gray-200 hover:text-gray-800"
        )}
      >
        <Icon />
      </Link>
    </TooltipTrigger>
    <TooltipContent side="right">{label}</TooltipContent>
  </Tooltip>
);
