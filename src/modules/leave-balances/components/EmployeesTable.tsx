import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui";

import { BALANCE_COLUMNS } from "../config/balanceColumns";
import type { Employee } from "../types/employee";
import { EmployeeRow } from "./EmployeeRow";

type EmployeesTableProps = {
  employees: Employee[];
};

export const EmployeesTable = ({ employees }: EmployeesTableProps) => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-16">ID</TableHead>
          <TableHead className="min-w-48">Name</TableHead>
          <TableHead className="min-w-56">Designation</TableHead>
          {BALANCE_COLUMNS.map(({ key, label }) => (
            <TableHead key={key} className="whitespace-nowrap">
              {label}
            </TableHead>
          ))}
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>

      <TableBody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </TableBody>
    </Table>

    {employees.length === 0 && (
      <p className="py-10 text-center text-sm text-gray-500">
        No employees found
      </p>
    )}
  </div>
);
