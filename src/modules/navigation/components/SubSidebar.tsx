import { cn } from "@/common/lib/utils";
import { navSections } from "@/modules/navigation";
import { useNavigationStore } from "@/modules/navigation";
import { Link } from "react-router-dom";

export const SubSidebar = () => {
  const activeRailId = useNavigationStore((state) => state.activeRailId);
  const activeSubId = useNavigationStore((state) => state.activeSubId);
  const select = useNavigationStore((state) => state.select);

  const section = navSections.find((item) => item.id === activeRailId);
  if (!section?.children) return null;

  return (
    <aside
      aria-label={section.label}
      className="my-2 flex w-(--layout-nav-width) shrink-0 flex-col gap-5 rounded-xl border border-gray-200 bg-gray-100 p-5"
    >
      <h2 className="text-heading2 leading-heading2 text-sidebarForeground font-bold">
        {section.label}
      </h2>

      <ul className="flex flex-col gap-1">
        {section.children.map((item) => {
          const active = activeSubId === item.id;

          return (
            <li key={item.id}>
              <Link
                to={item.path}
                aria-current={active ? "page" : undefined}
                onClick={() => select(section.id, item.id)}
                className={cn(
                  "text-default block rounded-xl px-4 py-2.5 transition-colors",
                  active
                    ? "bg-primary-lighter font-medium text-gray-800"
                    : "hover:bg-gray-250 text-gray-600"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
