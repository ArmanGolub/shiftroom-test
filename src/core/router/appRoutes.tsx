import { AppLayout } from "@/common/components/layout";
import { LeaveBalancesPage } from "@/modules/leave-balances";
import { UnknownPage } from "@/modules/unknown";
import { Navigate, type RouteObject } from "react-router-dom";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/leave-balances" replace />,
      },
      {
        path: "leave-balances",
        element: <LeaveBalancesPage />,
      },
      {
        path: "unknown",
        element: <UnknownPage />,
      },
      {
        path: "*",
        element: <Navigate to="/unknown" replace />,
      },
    ],
  },
];
