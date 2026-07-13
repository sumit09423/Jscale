import Image from "next/image";

const placementLogos = [
  { src: "/logos/tiktok.svg", alt: "TikTok" },
  { src: "/logos/freddie-mac.svg", alt: "Freddie Mac" },
  { src: "/logos/meta.svg", alt: "Meta" },
  { src: "/logos/amazon.svg", alt: "Amazon" },
  { src: "/logos/paypal.svg", alt: "PayPal" },
  { src: "/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/logos/discover.svg", alt: "Discover" },
  { src: "/logos/intel.svg", alt: "Intel" },
  { src: "/logos/google.svg", alt: "Google" },
  { src: "/logos/accenture.svg", alt: "Accenture" },
  { src: "/logos/capital-one.svg", alt: "Capital One" },
  { src: "/logos/chase.svg", alt: "Chase" },
  { src: "/logos/verisk.svg", alt: "Verisk" },
  { src: "/logos/fidelity.svg", alt: "Fidelity" },
  { src: "/logos/amgen.svg", alt: "Amgen" },
  { src: "/logos/stripe.svg", alt: "Stripe" },
  { src: "/logos/bank-of-america.svg", alt: "Bank of America" },
] as const;

function LogoCollection({
  copyIndex,
  ariaHidden = false,
}: {
  copyIndex: number;
  ariaHidden?: boolean;
}) {
  return (
    <div
      data-marquee-collection-target=""
      className="marquee-advanced__collection flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {placementLogos.map((logo) => (
        <div
          key={`${copyIndex}-${logo.alt}`}
          className="marquee-advanced__item-width flex h-12 w-32 shrink-0 items-center justify-center px-5 sm:h-[4.8rem] sm:w-40 sm:px-6"
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={140}
            height={48}
            className="image-cover contain h-8 w-auto max-w-full object-contain sm:h-10"
          />
        </div>
      ))}
    </div>
  );
}

export function LogoSection() {
  return (
    <section className="section_logo mt-3 overflow-hidden rounded-[2rem] bg-white">
      <div className="padding-global page-x">
        <div className="container-large mx-auto w-full max-w-6xl">
          <div className="padding-section-small flex flex-col items-center gap-8 py-12 sm:gap-10 sm:py-14">
            <p className="text-center text-xl font-bold tracking-wide text-zinc-700 sm:text-2xl lg:text-3xl">
              Candidates Placed in
            </p>

            <div className="marquee-advanced relative w-full overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

              <div
                data-marquee-scroll-target=""
                className="marquee-advanced__scroll flex w-max"
              >
                <LogoCollection copyIndex={0} />
                <LogoCollection copyIndex={1} ariaHidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
