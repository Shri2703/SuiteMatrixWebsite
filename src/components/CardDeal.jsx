import React from 'react'
import { cart } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>NetSuite Implementation<br className='sm:block hidden'/></h2>
        <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
  A successful NetSuite ERP implementation requires expertise and precision.
  <br className="sm:block hidden" />
</h3>

        <ul className="text-dimWhite text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-5 leading-relaxed max-w-[470px] mx-auto md:mx-0 list-disc list-inside">
          <li>NetSuite Implementation</li>
          <li>A successful NetSuite ERP implementation requires expertise and precision.</li>
          <li>Implementing NetSuite ERP successfully requires a deep understanding of business processes and technical precision.</li>
          <li>We begin by evaluating your current operations and creating a strategic roadmap.</li>
          <li>Our team delivers end-to-end ERP deployment tailored to your goals.</li>
          <li>We ensure seamless cloud migration and data transition.</li>
          <li>Comprehensive training and ongoing support are provided to empower your team.</li>
        </ul>

        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={cart}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
