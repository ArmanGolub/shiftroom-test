import { ContactFormPage, HomePage } from "@/modules/dashboard";
import { Outlet, type RouteObject } from "react-router-dom";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <div className="flex min-h-screen flex-col">
        <main>
          <Outlet />
        </main>
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactFormPage />,
      },
    ],
  },
];
