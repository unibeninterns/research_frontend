import Image from "next/image";
import footerImg from "@/public/heroSection/Photo.png";
import LinkedIn from "@/components/icons/LinkedIn";
import Logo from "@/components/icons/Logo";

export default function Footer() {
  const footerLinks = [
    {
      name: "DRID",
      links: [
        { name: "About Drid", href: "#" },
        { name: "Mission & Vision", href: "#" },
      ],
    },
    {
      name: "Courses",
      links: [
        { name: "Course Overview", href: "#" },
        { name: "Curriculum", href: "#" },
        { name: "Faculty", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      name: "Resources",
      links: [
        { name: "Reviews", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Use", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Mission & Vision", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ];
  return (
    <footer>
      <div className="relative w-full">
        <Image
          src={footerImg}
          alt="image"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 flex h-screen flex-col items-center justify-center bg-[linear-gradient(0deg,#FBEFFF26,#613B8286,#3B244FCC)] px-4 pb-0 text-center lg:justify-end lg:pb-20">
          <h1 className="mb-2 text-2xl font-bold text-white md:text-4xl lg:text-[84px]">
            Learning never stops.
          </h1>
          <p className="text-md mb-2 text-white md:text-2xl lg:text-[56px]">
            Join the next DRID cohort.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#3B244F] px-6 py-12 text-white md:px-16 lg:px-25 lg:pt-21 lg:pb-14">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
          {/* Left Side: Logo + Description */}
          <div className="w-full">
            <div className="mb-3 flex items-center gap-4">
              <Logo />
              <h4 className="font-bold lg:text-[32px]">DRID</h4>
            </div>
            <p className="mb-5 max-w-md text-base">
              Gain future-ready skills with structured research and innovation
              training from DRID, University of Benin.
            </p>
            <p className="mb-3 text-lg font-semibold">
              Stay updated on new DRID courses and opportunities.
            </p>

            {/* Email Subscription */}
            <form className="mr-auto flex w-full justify-between self-stretch rounded-full border-[0.5px] border-[#A6A6A6] text-base lg:p-2 lg:pl-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 bg-transparent px-4 py-2 text-white outline-none lg:w-50"
              />
              <button
                type="submit"
                className="primary-button rounded-full px-8 py-3 text-sm whitespace-nowrap transition hover:bg-pink-700"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Right Side: Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {footerLinks.map((fLink) => (
              <div key={fLink.name} className="flex flex-col">
                <p className="mb-4 text-xl font-semibold">{fLink.name}</p>
                <div className="flex flex-col">
                  {fLink.links.map((link) => (
                    <a key={link.name}>
                      <button className="bg-inherit text-base text-nowrap text-white transition-all hover:border-b">
                        {link.name}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-center text-sm md:text-left">
            Copyright © 2025 Directorate of Research, Innovation & Development
            (DRID), University of Benin. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/company/directorate-of-research-innovation-and-development-uniben/"
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <p>LinkedIn</p> <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
