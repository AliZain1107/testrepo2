
function Hero() {
  return (
    <div className='heroBottom bg-[#7AB870] min-h-[90vh] md:min-h-[120vh]  '>

<div className='max-w-[85%] 2xl:max-w-[1200px] mx-auto md:min-h-[80vh] min-h-[80vh] 2xl:min-h-[80vh] flex flex-col-reverse gap-4  md:gap-12 py-12 lg:flex-row md:justify-between   md:items-center    '>

        {/* Left Side */}
        <div className='lg:max-w-[42%] flex flex-col gap-6 text-white'>
            <h2 className=' font-[700] text-[36px]  leading-[42px] md:text-[50px] md:leading-[62px]'>Actually Connect with Your Leads</h2>
            <p className='text-lg lg:pr-10 font-[400]' >FranFunnel is the franchise industry&apos;s first text messaging solution designed to make you more effective at qualifying prospects and scheduling appointments.</p>
            <button className='hover:bg-[#2e3a28] bg-[#4E6245] text-[16px] font-[600] w-52  px-4 rounded-full transition-colors duration-100 p-2 py-3 '>See in Action</button>
        </div>

        <div className=' w-[80%]  mx-auto bg-transparent' >
        <iframe  
        className='rounded-xl customBoxShadow  bg-transparent w-full sm:w-[400px]  md:w-[560px] md:h-[315px] '
        src="https://www.youtube.com/embed/hjl3NcF3MOo" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
</iframe>
        </div>

      
</div>
    
    </div>
  )
}

export default Hero
