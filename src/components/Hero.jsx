import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { section } from 'framer-motion/client';
const Hero = () => {
  return (
    <section className='relative flex flex-col w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row mx-auto items-start gap-5 `}>
        <div className='flex flex-col justify-start items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
           <h1 className={`${styles.heroHeadText} text-white`}>{"Hi, I'm"} <span className="text-[#915eff]">Yaswanth</span>
           </h1>
           <p className={`${styles.heroSubText} text-white-100 mt-2.5`}>Interested in <span className='text-purple-700'>Web</span> Application Development</p>
        </div>
      </div> 
    
      <div className='w-full h-full relative -left-2  max-xs:-top-4 top-5'>
         <ComputersCanvas />
      </div> 
      <div className='relative max-xs:-top-24 top-0  max-xs:-bottom-5 -bottom-7 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='max-xs:w-[18px] max-xs:h-[38px] w-[25px] h-[44px]  rounded-3xl max-xs:border-2 border-4 border-secondary flex justify-center items-start '>
             <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:2,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full  bg-secondary"
              />
          </div>
        </a>
      </div>
     
    </section>
  )
}

export default Hero