import { cn } from "@/lib/utils";

const tones = {
  paper: "bg-paper text-ink",
  card: "bg-card text-ink",
  navy: "bg-navy text-paper",
  "navy-deep": "bg-navy-deep text-paper",
} as const;

const spacing = {
  default: "py-20 md:py-28",
  tight: "py-14 md:py-20",
  loose: "py-24 md:py-36",
} as const;

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: keyof typeof tones;
  space?: keyof typeof spacing;
  bordered?: boolean;
};

/** Bloco de seção semântico, com tom de fundo e respiro premium. */
export function Section({
  tone = "paper",
  space = "default",
  bordered = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        tones[tone],
        spacing[space],
        bordered && "border-y border-hairline",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
