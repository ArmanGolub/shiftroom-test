import avatarUrl from "@/assets/AvatarIcon.png";
import sunUrl from "@/assets/Sun.svg";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Switch,
  TooltipProvider,
} from "@/common/components/ui";
import { navSections, sectionTarget } from "@/modules/navigation";
import { useNavigationStore } from "@/modules/navigation";
import { Bell, ClipboardCheck } from "lucide-react";

import { useNavigationSync } from "../hooks/useNavigationSync";
import { Logo } from "./Logo";
import { RailAction } from "./RailAction";
import { RailLink } from "./RailLink";
import { SearchButton } from "./SearchButton";

const sunMask = {
  maskImage: `url("${sunUrl}")`,
  WebkitMaskImage: `url("${sunUrl}")`,
  maskSize: "contain",
  WebkitMaskSize: "contain",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskPosition: "center",
};

export const Sidebar = () => {
  useNavigationSync();

  const activeRailId = useNavigationStore((state) => state.activeRailId);
  const select = useNavigationStore((state) => state.select);

  return (
    <TooltipProvider delayDuration={300}>
      <nav
        aria-label="Main"
        className="text-common-black flex w-(--layout-nav-width-mini) shrink-0 flex-col items-center overflow-y-auto px-4 py-[30px]"
      >
        <Logo />

        <div className="mt-8">
          <SearchButton />
        </div>

        <ul className="mt-6 flex flex-col items-center gap-2">
          {navSections.map((section) => (
            <li key={section.id}>
              <RailLink
                to={sectionTarget(section)}
                label={section.label}
                icon={section.icon}
                active={activeRailId === section.id}
                onClick={() =>
                  select(section.id, section.children?.[0]?.id ?? null)
                }
              />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col items-center gap-2 pt-6">
          <RailAction label="Notifications" count={15}>
            <Bell />
          </RailAction>

          <RailAction label="Tasks" count={15}>
            <ClipboardCheck />
          </RailAction>

          <Switch
            defaultChecked
            aria-label="Appearance"
            className="group w-10.25"
            thumbIcon={
              <span
                style={sunMask}
                className="size-3 bg-(--gradient-primary-pressed-color) group-data-[state=unchecked]:bg-gray-500"
              />
            }
          />

          <Avatar>
            <AvatarImage src={avatarUrl} alt="Your profile" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </TooltipProvider>
  );
};
