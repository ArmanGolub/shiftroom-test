import { Input } from "@/common/components/ui";
import { FileUp, ListCollapse, SlidersHorizontal } from "lucide-react";

import { ToolbarButton } from "./ToolbarButton";

type LeaveBalancesToolbarProps = {
  query: string;
  onQueryChange: (query: string) => void;
  onCollapseAll: () => void;
};

export const LeaveBalancesToolbar = ({
  query,
  onQueryChange,
  onCollapseAll,
}: LeaveBalancesToolbarProps) => (
  <div className="flex flex-wrap items-center gap-2">
    <ToolbarButton aria-label="Export" className="w-9 px-0">
      <FileUp />
    </ToolbarButton>

    <Input
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
      placeholder="Search by name or email"
      aria-label="Search by name or email"
      className="h-9 w-72"
    />

    <div className="ml-auto flex flex-wrap items-center gap-2">
      <ToolbarButton>
        <SlidersHorizontal />
        Filters
      </ToolbarButton>

      <ToolbarButton onClick={onCollapseAll}>
        <ListCollapse />
        Collapse all
      </ToolbarButton>

      <ToolbarButton>Hide Archived</ToolbarButton>

      <ToolbarButton>Balance Audit</ToolbarButton>
    </div>
  </div>
);
