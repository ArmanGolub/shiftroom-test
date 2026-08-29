import avatarUrl from "@/assets/AvatarIcon.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  TableCell,
  TableRow,
} from "@/common/components/ui";
import { MoreHorizontal } from "lucide-react";

import { BALANCE_COLUMNS } from "../config/balanceColumns";
import type { Employee } from "../types/employee";

type EmployeeRowProps = {
  employee: Employee;
};

const formatBalance = (value: Employee[keyof Employee]) =>
  typeof value === "number" ? value.toFixed(2) : "—";

export const EmployeeRow = ({ employee }: EmployeeRowProps) => (
  <TableRow className="hover:bg-gray-100">
    <TableCell className="text-gray-600">{employee.id}</TableCell>

    <TableCell>
      <div className="flex items-center gap-2">
        <Avatar className="size-6 shrink-0">
          <AvatarImage src={avatarUrl} alt="" />
          <AvatarFallback>{employee.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <span className="text-primary cursor-pointer">{employee.name}</span>
      </div>
    </TableCell>

    <TableCell className="leading-tight text-gray-600">
      {employee.designation}
    </TableCell>

    {BALANCE_COLUMNS.map(({ key }) => (
      <TableCell key={key} className="whitespace-nowrap tabular-nums">
        {formatBalance(employee[key])}
      </TableCell>
    ))}

    <TableCell className="w-10">
      <button
        type="button"
        aria-label={`Actions for ${employee.name}`}
        className="flex size-8 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-200"
      >
        <MoreHorizontal />
      </button>
    </TableCell>
  </TableRow>
);
