/* eslint-disable react/prop-types */
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { li, p } from 'framer-motion/client'

const ExperienceCard = ({experience}) => {
  return (
     <VerticalTimelineElement
       contentStyle={{background:'#1d1836', color:'#fff'}}
       contentArrowStyle={{borderRight:'7px solid #232631'}}
       date={experience.date}
       iconStyle={{background:experience.iconBg}}
       icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.title}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
       }
     >
       <div>
         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
       </div>
       <ul className='mt-5 list-disc ml-5 space-y-2 pb-3'>
         {experience.points.map((point,index)=>(
            <li
             key={`experience-point-${index}`}
             className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
         ))}
       </ul>
       <p className='text-secondary text-[16px] font-semibold'>Languages used</p>
        <div className='flex flex-row flex-wrap gap-1 py-4'>
           {experience.languages.map((language,index)=>(
              <p key={index} className='p-2 bg-slate-900 hover:text-gray-500 text-white rounded-md'>{language}</p>
           ))}
        </div>
     </VerticalTimelineElement>
  )
}

export default ExperienceCard
