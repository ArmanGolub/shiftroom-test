import { Tabs, TabsList, TabsTrigger } from "@/common/components/ui";
import { motion } from "framer-motion";
import { useState } from "react";

const SCOPES = [
  { value: "head-office", label: "Head office" },
  { value: "restaurants", label: "Restaurants" },
];

export const ScopeTabs = () => {
  const [scope, setScope] = useState("restaurants");

  return (
    <Tabs value={scope} onValueChange={setScope}>
      <TabsList>
        {SCOPES.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="relative data-[state=active]:bg-transparent"
          >
            {scope === value && (
              <motion.span
                layoutId="scopeTabIndicator"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="bg-primary-lighter absolute inset-0 rounded-lg"
              />
            )}
            <span className="relative">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
