import { Page, Section } from "@/common/components/layout";

import { EmployeesPanel } from "../components/EmployeesPanel";
import { FilterDropdown } from "../components/FilterDropdown";
import { ScopeTabs } from "../components/ScopeTabs";
import { CHAINS } from "../mocks/chains";
import { LOCATIONS } from "../mocks/locations";

export const LeaveBalancesPage = () => (
  <Page>
    <Section divider={false}>
      <h1 className="text-heading2 leading-heading2 font-bold">
        Leave Balances
      </h1>
      <div className="mt-5">
        <ScopeTabs />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <FilterDropdown
          label="Chain"
          placeholder="Search Chain"
          options={CHAINS}
        />
        <FilterDropdown
          label="Location"
          placeholder="Search Location"
          options={LOCATIONS}
        />
      </div>
      <div className="mt-4">
        <EmployeesPanel />
      </div>
    </Section>
  </Page>
);
