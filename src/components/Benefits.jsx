import timeIcon from '../assets/time-icon-p.svg'
import scheduleIcon from '../assets/schedule-icon-p.svg'
import roiIcon from '../assets/roi-icon-p.svg'
import integrationIcon from '../assets/integration-icon-p.svg'
import mobileLogin from '../assets/franfunnel-login-screen.png'


function Benefits() {
  return (
    <div className='benefitsBg'>

    <div className="max-w-[1000px] px-[6%] flex flex-col gap-12 mx-auto">
    <div>


        <div className="md:w-[24vw] py-10">

      <h2 className="text-[#2D3A27] text-3xl md:text-4xl font-[700]">The benefits of using FranFunnel</h2>
        </div>

        <div className="grid gap-6 grid-cols-1  min-h-40 sm:grid-cols-2 md:grid-cols-4">
            <div className='bg-[#EBF7E8] scale-[.98] hover:scale-100 max-h-[40vh] 2xl:max-h-[30vh]  py-8  customBoxShadowSm text-center cursor-default flex flex-col gap-4 justify-center items-center transition-all duration-500'>
                <img width={100} src={timeIcon} alt="" />
                <p className='text-lg  max-w-[80%] mx-auto cursor-default    text-[#3C3C3B]'>Franfunnel saves time, money, and manpower</p>
            </div>

            <div className='bg-[#EBF7E8] scale-[.98] hover:scale-100 2xl:max-h-[30vh] max-h-[40vh] py-8  customBoxShadowSm text-center cursor-default flex flex-col gap-4 justify-center items-center transition-all duration-500'>
                <img width={100} src={scheduleIcon} alt="" />
                <p className='text-lg  max-w-[80%] mx-auto cursor-default    text-[#3C3C3B]'>Schedule more appointments and close more deals</p>
            </div>

            <div className='bg-[#EBF7E8] scale-[.98] hover:scale-100 2xl:max-h-[30vh] max-h-[40vh] py-8  customBoxShadowSm text-center cursor-default flex flex-col gap-4 justify-center items-center transition-all duration-500'>
                <img width={100} src={roiIcon} alt="" />
                <p className='text-lg  max-w-[80%] mx-auto cursor-default    text-[#3C3C3B]'>Increase ROI and get the most out of your marketing dollars</p>
            </div>

            <div className='bg-[#EBF7E8] scale-[.98] hover:scale-100 2xl:max-h-[30vh] max-h-[40vh] py-8  customBoxShadowSm text-center cursor-default flex flex-col gap-4 justify-center items-center transition-all duration-500'>
                <img width={100} src={integrationIcon} alt="" />
                <p className='text-lg  max-w-[80%] mx-auto cursor-default    text-[#3C3C3B]'>Integrates with every CRM and every lead source, seamlessly</p>
            </div>
        </div>
    </div>

    <div className=' grid grid-cols-1 md:grid-cols-2'>
        {/* Left Side */}
        <div className=''>
            <img  src={mobileLogin} alt="" />
        </div>


          {/* Right Side */}

            
          <div className='flex flex-col justify-center gap-3'>
                <h3 className='text-[#7AB870] text-2xl font-[600]'>FraFunnel converts</h3>
                <h2 className='text-4xl text-[#2D3A27] font-[700] '>Boost lead conversions from your phone.</h2>
                {/* Content */}
                <div className='flex flex-col gap-2 py-4 text-lg font-[400]'>
                    <p>Now with the FranFunnel app, your lead feed is right on your home screen right at your fingertips!</p>

                    <p>View your leads in rich detail (including statuses, interactions, contact and address information, and sources). See your past conversations with your leads and send them messages right on your phone. Managing your funnel has never been easier!</p>
                </div>
                {/* Call to Action */}
            <button className='bg-[#FF8C00] hover:bg-[#FF7300] text-[16px] font-[600] w-52  px-4 rounded-full text-white transition-colors duration-100 p-2 py-3 '>See It in Action</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Benefits
