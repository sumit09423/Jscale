import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export function AboutReady() {
  return (
    <section className="section_ready mt-3 overflow-hidden rounded-[2rem] bg-white">
      <div className="padding-global page-x">
        <div className="content_ready container-large mx-auto max-w-6xl">
          <div className="padding-global py-4 sm:py-6">
            <div className="grid_ready grid items-stretch overflow-hidden rounded-[2rem] bg-[#f3f7fc] lg:grid-cols-2">
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="text-wrap-balance max-w-xl">
                  <h2 className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-bold tracking-tight text-zinc-900">
                    Ready to Take the Next Step?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-600 opacity-70 sm:text-lg">
                    Whether you&apos;re a job seeker looking for your next
                    opportunity or a company seeking exceptional talent,
                    we&apos;re here to help you succeed. Connect with us today.
                  </p>

                  <div className="contact_item-wrap mt-8 space-y-4">
                    <Link
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="contact_item-block flex items-start gap-4 rounded-2xl bg-white p-4 transition-shadow hover:shadow-sm sm:p-5"
                    >
                      <div className="icon-1x1-medium relative size-12 shrink-0 overflow-hidden sm:size-14">
                        <Image
                          src="/about/email-icon.svg"
                          alt=""
                          fill
                          className="image-cover object-contain"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <div className="text-size-small text-sm text-zinc-500 opacity-50">
                          Email us on
                        </div>
                        <div className="mt-1 text-base leading-relaxed font-medium text-zinc-900">
                          {siteConfig.contactEmail}
                          <br />
                          +91 79843 16542, +1 (412) 203-6859
                        </div>
                      </div>
                    </Link>

                    <div className="contact_item-block flex items-start gap-4 rounded-2xl bg-white p-4 sm:p-5">
                      <div className="icon-1x1-medium relative size-12 shrink-0 overflow-hidden sm:size-14">
                        <Image
                          src="/about/location-icon.svg"
                          alt=""
                          fill
                          className="image-cover object-contain"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <div className="text-size-small text-sm text-zinc-500 opacity-50">
                          Visit Us
                        </div>
                        <address className="mt-1 text-base leading-relaxed font-medium text-zinc-900 not-italic">
                          30 N Gould St Ste N
                          <br />
                          Sheridan, WY 82801
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fill_ready relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-full">
                <Image
                  src="/about/ready.avif"
                  alt=""
                  fill
                  className="image-cover object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
