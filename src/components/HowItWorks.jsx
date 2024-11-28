import messageIcon from '../assets/messageIcon.svg';
import userIcon from '../assets/userIcon.svg';
import mobileDisplay1 from '../assets/mobileDisplay1.png';
import mobileDisplay2 from '../assets/mobileDisplay2.png';
import hex2 from '../assets/green-hex-2.svg'

function HowItWorks() {
  return (
    <div className='max-w-[1000px] px-[6%] xl:px-0 py-12 my-12  !mx-auto'> 
        <div className='max-w-[550px] text-center md:text-start mx-auto'>
      <h2 className="text-[#2D3A27] text-4xl py-12 font-[700]">How FranFunnel works to connect with your leads</h2>
        </div>
    <div className='flex flex-col-reverse py-4 md:grid md:grid-cols-2  gap-8 justify-center items-center'>
        {/* 1st Sub section */}
         {/* Left Side */}            
         <div className='flex flex-col justify-center  gap-5'>
            <div className='bg-[#8AC180] rounded-full w-14 h-14'>
                <img src={messageIcon} alt="" />
            </div>
                <h2 className='text-4xl text-[#2D3A27] font-[700] '>Automated texting</h2>
                {/* Content */}
                <div className='flex flex-col gap-2 py-4 text-lg font-[400]'>
                    <p className='pr-4'>FranFunnel sends a custom text message automatically, as soon as a new lead is submitted.</p>
                </div>
                {/* Call to Action */}
            <button className='bg-[#FF8C00] hover:bg-[#FF7300] text-[16px] font-[600] w-52  px-4 rounded-full text-white transition-colors duration-100 p-2 py-3 '>Request Demo</button>
        </div>

        {/* Right Side */}
        <div className='relative flex justify-center items-center'>
            <img className='absolute inset-0 top-[10%] z-[-99]' src={hex2} alt="" />
            <img  className='max-w-[70%] 2xl:h-[75vh] max-h-[110vh]' src={mobileDisplay1} alt="" />
        </div>
      
    </div>

            {/* Second Section */}
            <div>
                 <div className='flex flex-col py-4 md:grid md:grid-cols-2 gap-8 justify-center items-center'>
        
        {/* left Side */}
        <div className='relative flex justify-center items-center'>
            <img className='absolute inset-0 top-[10%] z-[-99]' src={hex2} alt="" />
            <img  className='max-w-[70%] 2xl:h-[75vh] max-h-[110vh]' src={mobileDisplay2} alt="" />
        </div>


         {/* Right Side */}            
         <div className='flex flex-col justify-center  gap-5'>
            <div className='bg-[#8AC180] rounded-full w-14 h-14'>
                <img src={userIcon} alt="" />
            </div>
                <h2 className='text-4xl text-[#2D3A27] font-[700] '>Interact with your lead</h2>
                {/* Content */}
                <div className='flex flex-col gap-2 py-4 text-lg font-[400]'>
                    <p className='pr-4'>You can easily answer questions and schedule appointments via text, right within our app.</p>
                </div>
                {/* Call to Action */}
            <button className='bg-[#FF8C00] hover:bg-[#FF7300] text-[16px] font-[600] w-52  px-4 rounded-full text-white transition-colors duration-100 p-2 py-3 '>Request Demo</button>
        </div>

        </div>
            </div>
    </div>
  )
}

export default HowItWorks
