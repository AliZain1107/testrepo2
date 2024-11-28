import img1 from '../assets/business-insider-logo.png'
import img2 from '../assets/franchise-times.svg'
import img3 from '../assets/knowtechie-logo.png'
import img4 from '../assets/global-franchise-logo.png'

function Parteners() {
  return (
    <div className='max-w-[1000px] px-6 lg:px-0 mx-auto py-12'>
        <div className='grid grid-cols-2  md:grid-cols-4  gap-2 justify-between items-center'>
            <img className='filter grayscale opacity-40 hover:opacity-100 hover:scale-110 blur-[0px] transition-all duration-300' width={200} src={img1} alt="" />
            <img className='filter grayscale opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 blur-[0px]' width={200} src={img2} alt="" />
            <img className='max-h-[50px] filter grayscale opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 blur-[0px]' width={200} src={img3} alt="" />
            <img className='filter grayscale opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 blur-[0px]' width={200} src={img4} alt="" />
        </div>
      
    </div>
  )
}

export default Parteners
