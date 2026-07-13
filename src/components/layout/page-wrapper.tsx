import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function PageWrapper({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "page-wrapper relative flex min-h-full flex-col bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
