import logo from '../assets/logo.svg'
import fbLogo from '../assets/fb.svg'
import linkedInLogo from '../assets/linkedin.svg'
function Footer() {
  return (
    <footer className='bg-[#3C3C3B]' >
        <div className='max-w-[775px] flex flex-col px-4 md:px-0 py-20 justify-start gap-6 items-center mx-auto '>

        <div className='my-2'>
            <img width={240} src={logo} alt="" />
        </div>

        <ul className='flex justify-center items-center flex-wrap gap-6'>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">Home</a></li>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">Clients</a></li>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">News</a></li>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">Team</a></li>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">Case Studies</a></li>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">Testimonials</a></li>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">Request Demo</a></li>
            <li><a className='no-underline font-[600] hover:text-[#bcbcbc] transition-colors duration-200 text-[15px] text-white' href="#">Contact Us</a></li>
        </ul>

        <div className='flex gap-4'>
            <div className='border-2 cursor-pointer hover:text-[#bcbcbc] hover:border-[#bcbcbc] transition-all duration-200 flex justify-center items-center border-white rounded-full w-10 h-10'>
            <img width={50} src={fbLogo} alt="" />
            </div>
            <div className='border-2 cursor-pointer hover:text-[#bcbcbc] hover:border-[#bcbcbc] transition-all duration-200 flex justify-center items-center border-white rounded-full w-10 h-10'>
            <img width={50} src={linkedInLogo} alt="" />
            </div>
        </div>
        
        <div className='text-white flex flex-col gap-2 text-sm text-center font-[400]'>
            <p>© Copyright 2020 FranFunnel Holdings LLC.</p>
        <div className=' flex text-center items-center justify-center gap-3'>
            <p>All Rights Reserved •</p>
                <a href='#'>Privacy Policy</a>
        </div>
        </div>


      
        </div>
    </footer>
  )
}

export default Footer
