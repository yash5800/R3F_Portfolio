
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,StarsCanvas,Tech} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center max-xs2:-mb-10 mb-16'>
            <Navbar/>
            <Hero/>
         </div>
         <About />
         <Experience />
         {/* <Tech /> */}
         <Feedbacks />
         <div className='relative z-0'>
             <Contact />
             <StarsCanvas /> 
         </div>
      </div>
    </BrowserRouter>
  )
}

export default App
