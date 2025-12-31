import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
