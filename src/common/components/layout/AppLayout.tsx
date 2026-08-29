import { Sidebar, SubSidebar } from "@/modules/navigation";
import { Outlet } from "react-router-dom";

export const AppLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <SubSidebar />
    <div className="ml-2 min-w-0 flex-1 overflow-y-auto bg-gray-200">
      <Outlet />
    </div>
  </div>
);
