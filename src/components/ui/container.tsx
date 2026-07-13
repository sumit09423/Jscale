import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentProps<"div"> & {
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
} as const;

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full page-x", sizeClasses[size], className)}
      {...props}
    />
  );
}
