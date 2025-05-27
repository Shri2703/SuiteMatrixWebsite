import React from 'react';
import { servies } from '../assets';

const Billing = () => {
  return (
    <section id="product" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
      {/* Left Side - Image */}
      <div className="relative flex-1 w-full h-full">
        <img
          src={servies}
          alt="billing"
          className="w-full h-full relative z-10"
        />
        {/* Gradient Overlays */}
        <div className="absolute z-0 -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 text-center md:text-left md:pl-10">
        <h2 className="text-white font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          How We Help <br className="sm:block hidden" /> Your Business?
        </h2>
        
        <h4 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          We deliver end-to-end NetSuite services tailored to your needs
        </h4>
        
        <ul className="text-dimWhite text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-5 leading-relaxed max-w-[470px] mx-auto md:mx-0 list-disc list-inside">
          <li>NetSuite Licensing & Consulting</li>
          <li>ERP Data Migration & Cloud Adoption</li>
          <li>Business Process Automation</li>
          <li>Customization & SuiteApp Development</li>
        </ul>

      </div>

    </section>
  );
};

export default Billing;
