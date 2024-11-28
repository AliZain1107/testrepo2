import './App.css'
import Benefits from './components/Benefits'
import Customers from './components/Customers'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import Parteners from './components/Parteners'
import RequestFrom from './components/RequestFrom'
import WhatIsFraFunnel from './components/WhatIsFraFunnel'
import WhyChoose from './components/WhyChoose'

function App() {
  return (
    <main className=' min-h-[100vh]'>
       <Navbar /> 
       <Navbar />
       <Hero />
       <WhatIsFraFunnel />
       <Parteners />
       <Benefits />
       <HowItWorks />
       <WhyChoose />
       <Customers />
       <RequestFrom />
       <Footer />
    </main>
  )
}

export default App
