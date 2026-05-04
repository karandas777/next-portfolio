import Image from "next/image";
import { PiEnvelopeFill, PiGithubLogoFill, PiLinkedinLogoFill, PiMapPinFill, PiPhoneCallFill, PiCodeBold } from "react-icons/pi";
import { CustomContainer } from "./CustomContainer";

export function Hero() {
  return (
    <section id="home">
      <CustomContainer>
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400">Karan Das</h1>
            {/* <div className="w-full h-1 bg-blue-400 rounded-full mt-4" /> */}
            <p className="text-xl md:text-2xl mt-3 flex items-center gap-2"><PiCodeBold className="text-blue-400 text-xl md:text-2xl" /> Frontend Developer</p>
          </div>
        </div>

        <div className="mt-6 md:mt-10 font-medium">
          <div className="flex mb-6 flex-wrap gap-4 md:gap-6 lg:gap-10 w-full items-center justify-center text-md md:text-lg lg:text-2xl">

            <a href="tel:+918828492119" className="flex items-center gap-3">
              <PiPhoneCallFill className="text-blue-400 text-xl md:text-2xl" /> +91 8828492119
            </a>
            <a href="mailto:karandas.21.08.98@gmail.com" className="flex items-center gap-3">
              <PiEnvelopeFill className="text-blue-400 text-xl md:text-2xl" /> karandas.21.08.98@gmail.com
            </a>


          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 w-full items-center justify-center text-md md:text-lg lg:text-2xl">

            <a href="https://github.com/karandas777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <PiGithubLogoFill className="text-blue-400 text-xl md:text-2xl" /> Github
            </a>
            <a href="https://www.linkedin.com/in/karan-das-0046a9183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <PiLinkedinLogoFill className="text-blue-400 text-xl md:text-2xl" /> LinkedIn
            </a>

          </div>
          <p className="text-md md:text-lg lg:text-2xl mt-10 font-bold flex items-center gap-3 justify-center"><PiMapPinFill className="text-blue-400 text-xl md:text-2xl" /> Mumbai, India - 401105</p>
        </div>

      </CustomContainer>
    </section>
  );
}
