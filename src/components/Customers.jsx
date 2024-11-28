import logo1 from '../assets/moes-logo.png'
import logo2 from '../assets/sport-clips-logo.png'
import logo3 from '../assets/aamco-logo.png'
import logo4 from '../assets/massage-envy-logo.jpeg'
import logo5 from '../assets/smoothie-king-logo.png'
import logo6 from '../assets/cinnabon-logo.png'

function Customers() {
  return (
    <div className='max-w-[1200px] flex flex-col justify-center  gap-14 px-[6%] 2xl:px-0 py-24 mx-auto'>
        <h2 className='self-center text-4xl font-[700]'>FranFunnel customers</h2>
        <div className='grid grid-cols-3 md:grid-cols-6 justify-center items-center'>
            <img className='max-w-[100px] lg:max-w-[120px] ' src={logo1} alt="" />
            <img className='max-w-[100px] lg:max-w-[120px] ' src={logo2} alt="" />
            <img className='max-w-[100px] lg:max-w-[120px] '  src={logo3} alt="" />
            <img className='max-w-[100px] lg:max-w-[120px] ' src={logo4} alt="" />
            <img className='max-w-[100px] lg:max-w-[120px] ' src={logo5} alt="" />
            <img className='max-w-[100px] lg:max-w-[120px] ' src={logo6} alt="" />
        </div>

        <button className='bg-transparent self-center  border-2 font-[600] text-[#E95096] border-[#E95096] rounded-full py-2 px-10 hover:bg-[#E95096] hover:text-white  transition-all duration-300'>More Customers</button>
      
    </div>
  )
}

export default Customers
