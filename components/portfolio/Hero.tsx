import Image from "next/image";
import { PiDownloadSimple, PiEnvelope, PiFacebookLogo, PiGithubLogo, PiInstagramLogo, PiLinkedinLogo, PiMapPin, PiPhoneCall, PiXLogo } from "react-icons/pi";

export function Hero() {
  return (
    <section id="home">
      <div className="p-6 py-12 md:p-24 min-h-dvh">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <Image
            src="/portfolio/profile.png"
            alt="Karan Das"
            width={160}
            height={160}
            priority
            className="aspect-square drop-shadow-lg object-cover object-top rounded-full"
          />
          <div className="ml-0 mt-6 text-center md:ml-10 md:mt-0 md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black dark:text-blue-400">Karan Das</h1>
            <p className="text-xl md:text-2xl mt-2">Frontend Developer</p>
          </div>
        </div>

        <div className="mt-6 md:mt-12">
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 w-full items-center justify-center text-sm md:text-lg lg:text-2xl">
            <a href="https://github.com/karandas777" className="flex items-center gap-3">
              <PiGithubLogo className="text-black dark:text-blue-400 text-xl md:text-2xl" /> karandas777
            </a>
            <a href="tel:+918828492119" className="flex items-center gap-3">
              <PiPhoneCall className="text-black dark:text-blue-400 text-xl md:text-2xl" /> +91 8828492119
            </a>
            <a href="mailto:karandas.21.08.98@gmail.com" className="flex items-center gap-3">
              <PiEnvelope className="text-black dark:text-blue-400 text-xl md:text-2xl" /> karandas.21.08.98@gmail.com
            </a>

          </div>
          <p className="flex items-center gap-3 mt-8 justify-center text-lg"><PiMapPin className="text-black dark:text-blue-400 text-xl md:text-2xl" /> Mumbai, India - 401105</p>
        </div>

        <a
          href="/portfolio/Resume.pdf"
          download
          className="mt-6 md:mt-12 drop-shadow-xl text-white mx-auto px-4 py-2 rounded-3xl w-fit flex items-center gap-3 justify-center text-sm md:text-lg lg:text-2xl bg-black dark:bg-blue-400 "
        >
          <PiDownloadSimple className="text-xl md:text-2xl" /> Download My Resume
        </a>

        <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6 lg:gap-10 w-full items-center justify-center text-sm md:text-lg lg:text-2xl">
          {[
            { name: "Facebook", href: "https://www.facebook.com/karan.das.7771", icon: <PiFacebookLogo className="text-black dark:text-blue-400 text-xl md:text-2xl" /> },
            { name: "Instagram", href: "https://www.instagram.com/karandas777", icon: <PiInstagramLogo className="text-black dark:text-blue-400 text-xl md:text-2xl" /> },
            { name: "Twitter", href: "https://twitter.com/karandas_777", icon: <PiXLogo className="text-black dark:text-blue-400 text-xl md:text-2xl" /> },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/karan-das-410182193/", icon: <PiLinkedinLogo className="text-black dark:text-blue-400 text-xl md:text-2xl" /> },
          ].map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-3"
            >
              {icon}
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
