import type { Employee } from "../types/employee";

export type BalanceColumn = {
  key: keyof Employee;
  label: string;
};

export const BALANCE_COLUMNS: BalanceColumn[] = [
  { key: "al", label: "AL" },
  { key: "ph", label: "PH" },
  { key: "pdo", label: "PDO" },
  { key: "sl", label: "SL" },
  { key: "ul", label: "UL" },
  { key: "sl_hp", label: "SL (HP)" },
  { key: "sl_up", label: "SL (UP)" },
  { key: "pl", label: "PL" },
  { key: "cl", label: "CL" },
];
