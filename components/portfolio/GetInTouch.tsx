import React from 'react'
import { CustomContainer } from './CustomContainer'
import { PiEnvelopeBold, PiGithubLogoBold, PiLinkedinLogoBold, PiMapPinFill, PiPhoneCallBold, PiWhatsappLogoBold } from "react-icons/pi";
import { SectionTitle } from './SectionTitle';

const GetInTouch = () => {
  return (
    <section id="get-in-touch">
        <CustomContainer>
            <SectionTitle>Get in Touch</SectionTitle>
        <div className="mt-4 md:mt-8 font-medium">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 lg:gap-10 w-full items-center justify-center text-sm md:text-md lg:text-xl">

            <a href="tel:+918828492119" className="col-span-3 md:col-span-1 mx-auto md:mx-0 flex items-center justify-center gap-2 glass p-2 md:p-4 rounded-3xl hover:scale-97 hover:shadow-lg transition-all duration-300">
              <PiPhoneCallBold className="text-xl md:text-2xl" /> +91 8828492119
            </a>
            <a href="mailto:karandas.21.08.98@gmail.com" className="col-span-3 md:col-span-2 flex items-center justify-center gap-2 glass p-2 md:p-4 rounded-3xl hover:scale-97 hover:shadow-lg transition-all duration-300">
              <PiEnvelopeBold className="text-xl md:text-2xl" /> karandas.21.08.98@gmail.com
            </a>
            <a href="https://wa.me/918828492119?text=Hi%20Karan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 glass p-2 md:p-4 rounded-3xl hover:scale-97 hover:shadow-lg transition-all duration-300">
              <PiWhatsappLogoBold className="text-xl md:text-2xl" /> <span className='hidden md:inline'>Whatsapp</span>
            </a>
            <a href="https://github.com/karandas777" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 glass p-2 md:p-4 rounded-3xl hover:scale-97 hover:shadow-lg transition-all duration-300">
              <PiGithubLogoBold className="text-xl md:text-2xl" /> <span className='hidden md:inline'>Github</span>
            </a>
            <a href="https://www.linkedin.com/in/karan-das-0046a9183" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 glass p-2 md:p-4 rounded-3xl hover:scale-97 hover:shadow-lg transition-all duration-300">
              <PiLinkedinLogoBold className="text-xl md:text-2xl" /> <span className='hidden md:inline'>LinkedIn</span>
            </a>
          </div>
        
        </div>
        </CustomContainer>
    </section>
  )
}

export default GetInTouch