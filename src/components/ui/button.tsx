import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]",
  secondary:
    "border border-border bg-white hover:bg-zinc-50 active:scale-[0.98]",
  ghost: "hover:bg-foreground/5 active:scale-[0.98]",
} as const;

const sizes = {
  default: "h-11 min-h-[var(--min-tap-target)] px-5 text-sm sm:text-base",
  lg: "h-12 min-h-[var(--min-tap-target)] px-6 text-base",
  icon: "size-11 min-h-[var(--min-tap-target)] min-w-[var(--min-tap-target)] p-0",
} as const;

type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  className,
  variant = "primary",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
