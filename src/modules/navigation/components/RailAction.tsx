import {
  Badge,
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui";

type RailActionProps = {
  label: string;
  count?: number;
  children: React.ReactNode;
};

export const RailAction = ({ label, count, children }: RailActionProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={label}
        className="relative size-10.25 rounded-xl border-gray-200 text-gray-600 shadow-none"
      >
        {children}
        {count !== undefined && (
          <Badge
            size="count"
            className="border-background absolute -top-1.5 -right-1.5 h-4 border-2"
          >
            {count}
          </Badge>
        )}
      </Button>
    </TooltipTrigger>
    <TooltipContent side="right">{label}</TooltipContent>
  </Tooltip>
);
