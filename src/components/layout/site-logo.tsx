import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src="/Logo.jpeg"
        alt="Jscale"
        width={180}
        height={52}
        priority
        className="h-11 w-auto object-contain sm:h-12 lg:h-11"
      />
    </Link>
  );
}
