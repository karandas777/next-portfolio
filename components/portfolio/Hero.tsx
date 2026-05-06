import Image from "next/image";
import { PiMapPinFill, PiEnvelopeBold, PiPhoneCallBold, PiGithubLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { CustomContainer } from "./CustomContainer";

export function Hero() {
  return (
    <section id="home">
      <CustomContainer>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src="/portfolio/profile.png"
            alt="Karan Das"
            width={160}
            height={160}
            priority
            className="aspect-square w-24 h-24 md:w-40 md:h-40 drop-shadow-lg object-cover object-top rounded-full"
          />
          <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Karan Das</h1>
            {/* <div className="w-full h-1 bg-blue-400 rounded-full mt-4" /> */}
            <p className="text-md md:text-2xl mt-1 md:mt-3">Frontend Developer</p>
          </div>
        </div>

        <div className="mt-8 md:mt-16 font-medium">
          <div className="flex mb-6 flex-wrap flex-col md:flex-row gap-6 lg:gap-10 w-full items-center justify-center text-md md:text-lg">

            <a href="tel:+918828492119" className="flex items-center gap-2 glass px-3 py-1 rounded-full">
              <PiPhoneCallBold className="text-blue-400 text-xl md:text-2xl" /> +91 8828492119
            </a>
            <a href="mailto:karandas.21.08.98@gmail.com" className="flex items-center gap-2 glass px-3 py-1 rounded-full">
              <PiEnvelopeBold className="text-blue-400 text-xl md:text-2xl" /> karandas.21.08.98@gmail.com
            </a>


          </div>
          <div className="flex flex-wrap gap-6 lg:gap-10 w-full items-center justify-center text-md md:text-lg">

            <a href="https://github.com/karandas777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 glass px-3 py-1 rounded-full">
              <PiGithubLogoBold className="text-blue-400 text-xl md:text-2xl" /> Github
            </a>
            <a href="https://www.linkedin.com/in/karan-das-0046a9183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 glass px-3 py-1 rounded-full">
              <PiLinkedinLogoBold className="text-blue-400 text-xl md:text-2xl" /> LinkedIn
            </a>

          </div>
          <p className="text-md md:text-lg lg:text-2xl mt-10 md:mt-16 font-bold flex items-center gap-3 justify-center "><PiMapPinFill className="text-red-500 text-xl md:text-2xl" /> Mumbai, India - 401105</p>
        </div>

      </CustomContainer>
    </section>
  );
}
