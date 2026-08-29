import { create } from "zustand";

type NavigationState = {
  activeRailId: string | null;
  activeSubId: string | null;
  select: (railId: string, subId?: string | null) => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  activeRailId: null,
  activeSubId: null,
  select: (railId, subId = null) =>
    set({ activeRailId: railId, activeSubId: subId }),
}));
