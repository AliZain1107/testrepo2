import React from 'react'
import greenFunnel from '../assets/green-funnel.svg'

function WhyChoose() {
  return (
    <section>
    <div className='bg-[#EBF7E8] whyChooseBg min-h-[150vh] flex justify-center items-center'>

        <section className='max-w-[1200px] px-[6%] xl:px-[4%] 2xl:px-0 flex flex-col gap-12 mx-auto'>

            {/* Heading Container */}
        <div className='max-w-[550px] mx-auto'>
      <h2 className="text-[#2D3A27] text-4xl font-[700]">Why choose FranFunnel?</h2>
        </div>
        {/* Section Content */}
        <div className='flex flex-col md:flex-row justify-between gap-12  '>
            <div className='flex  items-start gap-4 '>
                <img width={60} src={greenFunnel} alt="" />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-[22px] font-[700]'>Increase conversions</h2>
                    <p>If you&apos;re not texting, you&apos;re losing sales &ndash; Every day. We&apos;ll show you how easy and effective text messaging can be.</p>

                </div>
            </div>

            <div className='flex items-start gap-4 '>
                <img width={60} src={greenFunnel} alt="" />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-[22px] font-[700]'>Save time</h2>
                    <p>If you&apos;re texting manually on your personal phone, it&apos;s too slow and inefficient. Especially outside of business hours.</p>

                </div>
            </div>

            <div className='flex items-start gap-4 '>
                <img width={60} src={greenFunnel} alt="" />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-[22px] font-[700]'>Increase conversions</h2>
                    <p>If your CRM is texting for you, it&apos;s difficult to manage it from your phone, and 2-way texting is clunky and ineffective.</p>

                </div>
            </div>

           
        </div>



        </section>
      
    </div>
    
    <div className='py-12 px-[6%] 2xl:px-0 text-center flex flex-col gap-24 items-center justify-center max-w-[1000px] mx-auto'>

        <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-x-32'>

            <div className=''>
                <h2 className='text-[65px] max-w-[300px] mx-auto font-[700] text-[#FF8C00]'>90%</h2>
                <h3 className='text-[30px] leading-[32px] mb-4 max-w-[400px] mx-auto font-[700] text-[#3C3C3B]'>of leads prefer texting to phone or email</h3>
                <p className='text-[#3C3C3B]'>FranFunnel sends a custom text message automatically, as soon as a new lead is submitted.</p>
            </div>

            <div>
                <h2 className='text-[65px]  max-w-[300px] mx-auto font-[700] text-[#FF8C00]'>70%</h2>
                <h3 className='text-[30px] leading-[32px] mb-4 max-w-[400px] mx-auto font-[700] text-[#3C3C3B]'>of leads are generated outside of business hours</h3>
                <p className='text-[#3C3C3B]'>You can easily answer questions and schedule appointments via text, right within our app.</p>
            </div>


        </div>

        <button className='bg-[#FF8C00] hover:bg-[#FF7300] text-[16px] font-[600] w-52  px-4 rounded-full text-white transition-colors duration-100 p-2 py-3 '>Request Demo</button>

        </div>
    </section>
  )
}

export default WhyChoose
