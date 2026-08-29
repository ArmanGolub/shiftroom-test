import { cn } from "@/common/lib/utils";

type PageProps = {
  className?: string;
  children: React.ReactNode;
};

export const Page = ({ className, children }: PageProps) => (
  <main className={cn("px-4 py-6", className)}>{children}</main>
);
