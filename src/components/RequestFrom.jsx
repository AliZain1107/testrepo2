import funnel from '../assets/green-funnel.svg'
import bg from '../assets/swoop-5-bottom.svg'

function RequestFrom() {
  return (
    <section className='bg-[#EBF7E8] requestFormBg flex justify-center items-center relative  min-h-[80vh]'>
            <div className='flex flex-col mt-32 gap-6 max-w-[300px] sm:max-w-[400px] md:max-w-[770px] mx-auto'>
                <div className='flex flex-col md:flex-row items-center gap-2'>
                    <img width={60} src={funnel} alt="" />
                <h2 className='text-center text-[30px] text-[#3C3C3B] font-[700]'>Request an instant FranFunnel demo now!</h2>

                </div>

            <section className='flex flex-col md:flex-row sm:gap-10 overflow-hidden'>

                <form className='md:w-[48%] flex flex-col  gap-4   ' >
                    <div className='flex flex-col gap-4  md:flex-row justify-between '>
                        <div className='md:w-[48%] '>
                         <input className='max-w-[100%] w-full bg-transparent outline-none placeholder:text-sm border border-transparent border-b-[#3C3C3B] focus:border-b-2 focus:border focus:border-blue-500 placeholder:text-[#3C3C3B] placeholder:font-[500] p-1  border-b-2 border-[#3C3C3B]' type="text" placeholder='First Name*' name="firstName" id="firstName" />
                        </div>
                        <div className='md:w-[48%]'>
                            <input className='max-w-[100%] w-full bg-transparent outline-none placeholder:text-[#3C3C3B] placeholder:text-sm border border-transparent border-b-[#3C3C3B] focus:border-b-2 focus:border focus:border-blue-500 placeholder:font-[500] p-1 border-b-2 border-[#3C3C3B]' type="text" placeholder='Last Name*' name="lastName" id="lastName" />
                        </div>
                    </div>

                    <div>
                            <input className='w-full bg-transparent outline-none placeholder:text-[#3C3C3B] placeholder:text-sm border border-transparent border-b-[#3C3C3B] focus:border-b-2 focus:border focus:border-blue-500 placeholder:font-[500] p-1 border-b-2 border-[#3C3C3B]' type="text" placeholder='Company' name="company" id="company" />
                        </div>

                        <div>
                            <input className='w-full bg-transparent outline-none placeholder:text-[#3C3C3B] placeholder:text-sm border border-transparent border-b-[#3C3C3B] focus:border-b-2 focus:border focus:border-blue-500 placeholder:font-[500] p-1 border-b-2 border-[#3C3C3B]' type="text" placeholder='Email*' name="email" id="email" />
                        </div>

                        <div>
                            <input className='w-full bg-transparent outline-none placeholder:text-[#3C3C3B] placeholder:text-sm border border-transparent border-b-[#3C3C3B] focus:border-b-2 focus:border focus:border-blue-500 placeholder:font-[500] p-1 border-b-2 border-[#3C3C3B]' type="text" placeholder='Cell Phone Number*' name="phoneNumber" id="phoneNumber" />
                        </div>
                </form>

            {/* Right Side Content */}
                <div className='flex flex-col gap-6 my-6 md:my-0 justify-between md:w-[48%]'>
                    <p className='text-[#3C3C3B]'><strong>Surprise!</strong> When you request a demo of FranFunnel, we actually use FranFunnel to respond to your request. Please be sure to enter your to see it in action.</p>
                    <button className='bg-[#FF8C00] hover:bg-[#FF7300] text-[16px] font-[600] w-52  px-4 rounded-full self-center md:self-start text-white transition-colors duration-200 p-2 py-3 '>FranFunnel Me!</button>
                </div>

                </section>
            </div>
      
    </section>
  )
}

export default RequestFrom
