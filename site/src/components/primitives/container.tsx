import { cn } from "@/lib/utils";

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
} as const;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof sizes;
};

export function Container({
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-8", sizes[size], className)} {...props}>
      {children}
    </div>
  );
}
