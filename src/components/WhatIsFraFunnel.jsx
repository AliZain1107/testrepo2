import React from 'react'
import blob1 from '../assets/msg-blob-1.svg'
import blob2 from '../assets/msg-blob-2.svg'
import blob3 from '../assets/msg-blob-3.svg'
import blob4 from '../assets/msg-blob-4.svg'
function WhatIsFraFunnel() {
  return (
    <div className='max-w-[1000px] mx-auto'>
        <div className='grid grid-cols-1 px-6 md:px-4  md:grid-cols-2  justify-center items-center gap-8 py-12'>

            {/* Left Side */}
            <div className=' text-white flex flex-col gap-4 '>
                
                {/* Blob 1 */}
                <div className=' w-[75%] self-start  relative bg-cover '  >
                <img className='object-cover max-w-[100%]'   src={blob1} alt="" />
                    {/* Blob Content */}
                    <div className='absolute inset-0 pr-[10px] md:pr-[25px] pl-[20px]  md:pl-[40px] pt-2 md:pt-4 flex '>
                        {/* Blob Text */}
                    <div className='text-xs sm:text-sm md:text-[18px]'>Hi Aaron, this is Samantha with SportClips. I&apos;m interested in speaking with you about your franchise options.</div>
                </div>
                    </div>

                {/* Blob 2 */}


                <div className='relative bg-cover w-[75%] self-end'  >
                <img className='object-cover max-w-[100%]'   src={blob2} alt="" />
                    {/* Blob Content */}
                    <div className='absolute inset-0 pl-[10px] pr-[20px] md:pl-[25px]  md:pr-[40px] pt-2 md:pt-4 flex '>
                        {/* Blob Text */}
                    <div className='text-xs sm:text-sm md:text-lg'>Hi Samantha, I would be happy to jump on a call. Will 11AM ET tomorrow work for you?</div>
                </div>
                    </div>

                {/* Blob 3 */}

                <div className='relative w-[75%] bg-cover self-start'  >
                <img className='object-cover'  src={blob3} alt="" />
                    {/* Blob Content */}
                    <div className='absolute inset-0  pr-[10px] pl-[20px]  md:pr-[25px] md:pl-[40px] pt-2 md:pt-4 flex '>
                        {/* Blob Text */}
                    <div className='text-xs sm:text-sm md:text-lg'>That&apos; perfect.</div>
                </div>
                    </div>

                {/* Blob 4*/}                    

                <div className='relative w-[75%] bg-cover self-end'  >
                <img className='object-cover'   src={blob4} alt="" />
                    {/* Blob Content */}
                    <div className='absolute inset-0 pl-[10px] pr-[20px]  md:pl-[25px]  md:pr-[40px] pt-1 md:pt-4 flex '>

                        {/* Blob Text */}
                    <div className='text-xs sm:text-sm md:text-lg'>I&apos;ll send over a calendar invite and give you a ring at this number.</div>
                </div>
                    </div>
            </div>


      {/* Right Side */}

            
            <div className='flex flex-col justify-end self-end gap-3'>
                <h3 className='text-[#7AB870] text-2xl font-[600]'>What is FraFunnel?</h3>
                <h2 className='text-4xl text-[#2D3A27] font-[700] '>FraFunnel takes texting to the another level.</h2>
                {/* Content */}
                <div className='flex flex-col gap-2 py-4 text-lg font-[400]'>
                    <p>The <strong className='text-[#E95096]'>#1 way</strong>  to connect with your franchise leads is through text messaging.</p>
                    <p>FranFunnel helps you follow up with and naturally communicate with people interested in opening your franchise.</p>
                </div>
                {/* Call to Action */}
            <button className='bg-[#FF8C00] hover:bg-[#FF7300] text-[16px] font-[600] w-52  px-4 rounded-full text-white transition-colors duration-100 p-2 py-3 '>See in Action</button>
        </div>

            </div>
        </div>
  )
}

export default WhatIsFraFunnel
