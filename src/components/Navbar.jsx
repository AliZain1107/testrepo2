import { useState } from 'react';
import logo from '../assets/logo.svg'
import menu from '../assets/menu-bars.svg'

function Navbar() {
    const year = new Date().getFullYear();
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the navbar open and close
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
      console.log("NAV IS : ", isOpen?'Opened :)' : 'Closed :(')
    };

    
  return (
    <nav className='  text-white '>
        {/* Topbar */}
        <div className='text-center text-[13px] sm:text-[15px] px-7  py-1 bg-[#2D3A27]'>
                <p>Named as the <strong>Enterpreneur Magazine <span className='text-lime-400'> &nbsp;#1</span></strong> Franchise Technology Supplier for {year}</p>
        </div>
        
        {/* Navbar */}

        <div className='relative bg-[#7AB870]'>
            <div className='max-w-[85%]  flex justify-between py-4 mx-auto'>

            <div className='flex gap-12 items-center'>
                <img className='max-w-[120px] sm:max-w-[180px]' width={200} src={logo} alt="" />
                <ul className='hidden lg:flex gap-4 text-[15px] font-[500]'>
                    <li ><a className='text-lime-950' href="#">Home</a></li>
                    <li ><a  href="#">Clients</a></li>
                    <li ><a  href="#">News</a></li>
                    <li ><a  href="#">Contact</a></li>
                </ul>
            </div>

            <div className='hidden lg:flex gap-4'>
            <button className='bg-[#2e3a28] hover:bg-[#4E6245] text-[15px] font-[500] w-48  px-4 rounded-full p-2 text-white'>Request a Demo</button>
            <button className='border-2  border-lime-950 px-12 rounded-full p-2 text-white'>Log In</button>
            </div>

            <div onClick={toggleNavbar} className='px-4 block lg:hidden'><img className='invert' width={20} src={menu} alt="" /></div>
            </div>


            {/* Mobile Menu */}
               <div
        className={`absolute w-full block lg:hidden  bg-[#ffffffea] text-lime-900 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ top: '100%' }} // Ensure it starts directly below the navbar
      >
        <ul className="flex flex-col items-center px-2 space-y-6 py-6">
          <li>
            <a href="#home" className={`font-[500]   text-sm text-center `}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`font-[500] text-sm text-center  `}>
              Clients
            </a>
          </li>
          <li>
            <a href="#services" className={`font-[500]  text-sm text-center `}>
              News
            </a>
          </li>
          <li>
            <a href="#testimonials" className={`font-[500]  text-sm text-center `}>
              Contact
            </a>
          </li>

        </ul>

        <div className='flex !flex-col items-center mb-4 gap-4'>
            <button className='hover:bg-[#2e3a28]  bg-[#4E6245] text-[11px] font-[500] w-48  px-4 rounded-full p-2 text-white'>Request a Demo</button>
            <button className='border-[1.5px]  border-lime-950 w-48 px-12 text-xs rounded-full py-2 text-pink-700'>Log In</button>
            </div>
      </div>



        </div>

     


      
    </nav>
  )
}

export default Navbar
