/* eslint-disable react-refresh/only-export-components */
import {motion} from 'framer-motion'
import {SectionWrapper} from '../hoc'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import ServiceCard from './ServiceCard'

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>Introduction</p>
         <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-3'>
        <p>
      I am a passionate full-stack developer with experience in building dynamic and user-friendly web applications. My technical expertise spans modern frameworks and tools such as React.js, Next.js, Express.js, Sanity, and Node.js.
      </p><p>
      Currently, I am diving deeper into TypeScript to       enhance code quality and scalability in my projects.       I enjoy creating efficient, secure, and maintainable       solutions, with a particular focus on seamless user       experiences and clean architecture.
      </p><p>
      I thrive on learning new technologies and solving       challenges, always aiming to stay updated with the       latest trends in web development. Check out my       projects to see how I bring ideas to life!
       </p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About,"about")