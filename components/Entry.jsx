import React from 'react'

const Entry = () => {
  return (
    <>
    <section className=' tracking-[2px] px-[50px] sm:px-[20px] mt-[60px] sm:mt-[40px] uppercase  flex sm:flex-col flex-row justify-around   '>
       
        <div className='flex flex-col justify-center  ' >
            <img className=' md:w-[190px] sm:w-[170px] lg:w-[520.7px]  ' src="../assistes/zimoblack.png" alt="" />
            <p className=' sm:text-[25px] mt-3 sm:mt-6 text-[40px] '>ONE SOURCE</p>
            <p className=' sm:text-[30px] sm:my-6 text-[60px] ' >ENTRY TICKETS</p>
            <p className=' sm:text-[18px] sm:mb-3 text-silver  text-[20px] ' >FOR ALL PREMIUM LISTINGS</p>

        </div>
        <div>
          <img className=' w-[900px] sm:w-[350px] sm:p-0 p-6 ' src="../assistes/pf1.png" alt="" />
          <p className='text-center sm:my-[20px] mb-[60px] sm:text-start  sm:text-[16px] text-[30px]' >LET YOUR DREAMS FIND YOU</p>
        </div>

    </section>
    </>
  )
}

export default Entry