import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/seo";

const sizeClasses = {
  sm: "h-7 w-auto max-w-[7.5rem] object-contain object-left sm:h-8 sm:max-w-[9rem]",
  md: "h-8 w-auto max-w-[8.5rem] object-contain object-left sm:h-9 sm:max-w-[10rem] lg:h-10 lg:max-w-[11rem]",
} as const;

export function SiteLogo({
  size = "md",
  className,
  onClick,
}: {
  size?: keyof typeof sizeClasses;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex shrink-0 items-center", className)}
      onClick={onClick}
    >
      <Image
        src="/Logo.jpeg"
        alt="Jscale"
        width={180}
        height={61}
        priority
        className={sizeClasses[size]}
      />
    </Link>
  );
}
