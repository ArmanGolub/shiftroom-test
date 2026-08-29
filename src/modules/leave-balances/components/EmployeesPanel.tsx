import { useState } from "react";

import { EMPLOYEES } from "../mocks/employees";
import { CollapsibleGroup } from "./CollapsibleGroup";
import { EmployeesTable } from "./EmployeesTable";
import { LeaveBalancesToolbar } from "./LeaveBalancesToolbar";

export const EmployeesPanel = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const employees = EMPLOYEES.filter((employee) =>
    employee.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="bg-common-white border-gray-250 flex flex-col gap-4 rounded-xl border p-4">
      <LeaveBalancesToolbar
        query={query}
        onQueryChange={setQuery}
        onCollapseAll={() => setOpen((current) => !current)}
      />

      <CollapsibleGroup label="Label" open={open} onOpenChange={setOpen}>
        <EmployeesTable employees={employees} />
      </CollapsibleGroup>
    </div>
  );
};
