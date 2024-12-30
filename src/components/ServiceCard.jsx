/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion'


const ServiceCard = ({index,title,icon}) => {
  return (
    <div>
       <Tilt className="xs:w-[250px] w-full">
         <motion.div
          variants={fadeIn('right','spring',0.5*index,0.75)}
          className='w-full green-pink-gradient rounded-[20px] shadow-card p-[2px]'
        >
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
          </div>
         </motion.div>
       </Tilt>
    </div>
  )
}

export default ServiceCard
