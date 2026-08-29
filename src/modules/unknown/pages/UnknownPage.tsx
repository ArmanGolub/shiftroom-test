import { Page, Section } from "@/common/components/layout";

export const UnknownPage = () => (
  <Page>
    <Section divider={false}>
      <h1 className="text-heading2 leading-heading2 font-semibold">Unknown</h1>
      <p className="text-mutedForeground mt-3">
        This section has not been built yet.
      </p>
    </Section>
  </Page>
);
