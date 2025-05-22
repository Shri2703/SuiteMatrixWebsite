import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className='flex md:flex-row flex-col pt-0'>
      {/* LEFT TEXT CONTENT */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount Badge */}
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>YOUR</span> TRUSTED ORACLE {" "}
            <span className='text-white'>NETSUITE</span> PARTNER
          </p>
        </div>

        {/* Main Heading */}
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] text-white leading-tight sm:leading-[60px] md:leading-[68px] lg:leading-[75px]'>
            Leading Netsuite for <br className='sm:block hidden' />
            <span className='text-gradient'>
              Implementation, Customization, & Support
            </span>
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        {/* Description */}
        <p className='text-dimWhite text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-5 leading-relaxed max-w-[470px]'>
          We specialize in building digital products and mobile applications
          that address business challenges through our comprehensive software
          development services.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      {/* GetStarted button for small screens */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
