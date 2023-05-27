import React from 'react'
import { Parallax } from 'react-parallax'

const Personalised  = () => {
  return (
    <Parallax strength={-500}   >
    <div className=' footer  h-screen flex tracking-[2px]  bg-local  bg-center bg-no-repeat bg-cover' >
        <div className='grid sm:grid-cols-1 3xl:grid-cols-4  uppercase text-white  grid-cols-3' >
          <div className=' flex flex-col justify-center' >
            <img className=' w-[200px] lg:w-[500.74px] lg:ml-[60px] ml-3 ' src="../assistes/f1.png" alt="" />
          </div>
          <div className='flex  sm:hidden' ></div>
          <div className='flex 3xl:flex lg:hidden sm:hidden' ></div>

          <div className='   sm:px-[20px] '>
            <div className='sm:bg-opacity-40 blurFun sm:bg-black '>
            <div className='    sm:pt-3 sm:px-2 ' >
           <p className=' sm:text-[14px] 5xl:text-[45px] text-[30px]  text-[white]   sm:pt-0 pt-12'>Personalised for You</p>
           <p className='  text-gray-300  font-medium 5xl:pr-[110px] 3xl:pr-[38px] 3xl:text-[15px] 4xl:text-[20px]  2xl:pr-[90px] sm:pr-2 mt-[40px] sm:text-[10px] text-[12px]'>Delivering thousands of personalised alerts everyday, our USERS can be first in line when that opportunity of a lifetime is here.</p>
           </div>
           <p className='flex  sm:py-3  sm:px-2 sm:justify-start lg:text-[21px]  text-[14px]  lg:mt-[220px] justify-center   '>CREATE USER ID <img 
           className='w-[44.87px] ml-3 '
           src="../assistes/f2.png" alt="" /></p>
          </div>
          </div>

        </div>
    </div>
    </Parallax>
  )
}

export default Personalised 