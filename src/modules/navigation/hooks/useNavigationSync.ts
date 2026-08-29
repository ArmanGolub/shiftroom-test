import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { matchLocation } from "../config/navSections";
import { useNavigationStore } from "../stores/useNavigationStore";

export const useNavigationSync = () => {
  const { pathname } = useLocation();
  const select = useNavigationStore((state) => state.select);

  useEffect(() => {
    const match = matchLocation(pathname);
    if (match) select(match.railId, match.subId);
  }, [pathname, select]);
};
