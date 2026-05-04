import Image from "next/image";
import { PiDownloadSimple, PiEnvelope, PiGithubLogo, PiLinkedinLogo, PiMapPin, PiPhoneCall } from "react-icons/pi";

export function Hero() {
  return (
    <section id="home">
      <div className="p-6 py-12 md:p-24 md:py-12 min-h-dvh flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <Image
            src="/portfolio/profile.png"
            alt="Karan Das"
            width={160}
            height={160}
            priority
            className="aspect-square w-30 h-30 md:w-40 md:h-40 drop-shadow-lg object-cover object-top rounded-full"
          />
          <div className="ml-0 mt-6 text-center md:ml-8 md:mt-0 md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-blue-400">Karan Das</h1>
            <p className="text-xl md:text-2xl mt-3">Frontend Developer</p>
            <p className="text-md mt-1">Mumbai, India - 401105</p>
          </div>
        </div>

        <div className="mt-6 md:mt-12">
          <div className="flex mb-6 flex-wrap gap-4 md:gap-6 lg:gap-10 w-full items-center justify-center text-md md:text-lg lg:text-2xl">

            <a href="tel:+918828492119" className="flex items-center gap-3">
              <PiPhoneCall className="text-black dark:text-blue-400 text-xl md:text-2xl" /> +91 8828492119
            </a>
            <a href="mailto:karandas.21.08.98@gmail.com" className="flex items-center gap-3">
              <PiEnvelope className="text-black dark:text-blue-400 text-xl md:text-2xl" /> karandas.21.08.98@gmail.com
            </a>


          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 w-full items-center justify-center text-md md:text-lg lg:text-2xl">

            <a href="https://github.com/karandas777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <PiGithubLogo className="text-black dark:text-blue-400 text-xl md:text-2xl" /> Github
            </a>
            <a href="https://www.linkedin.com/in/karan-das-0046a9183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <PiLinkedinLogo className="text-black dark:text-blue-400 text-xl md:text-2xl" /> LinkedIn
            </a>

          </div>
        </div>

        <a
          href="/portfolio/Resume.pdf"
          download
          className="mt-6 md:mt-12 drop-shadow-xl text-white font-bold mx-auto px-4 py-2 rounded-3xl w-fit flex items-center gap-3 justify-center text-sm md:text-lg bg-black dark:bg-blue-400 "
        >
          <PiDownloadSimple className="text-xl md:text-2xl" /> Download My Resume
        </a>

      </div>
    </section>
  );
}
