/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'


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
      <div></div>
       <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>

       <ul className='mt-5 list-disc ml-5 space-y-2 pb-3'>
         {experience.points.map((point,index)=>(
            <li
             key={index}
             className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
         ))}
       </ul>

       <p className='text-secondary text-[16px] font-semibold'>Languages used</p>
        <div className='flex flex-row flex-wrap gap-1 py-4'>
           {experience.languages.map((language,index)=>(
              <p key={`lag-${index}`} className='p-2 bg-slate-900 hover:text-gray-500 text-white rounded-md'>{language}</p>
           ))}
        </div>
        <div className='pt-2 pb-3'>
        {experience.link&&
          <a 
          href={experience.link} 
          target='_blank'
          className='text-secondary hover:text-white-100 hover:bg-slate-900 bg-slate-800 rounded-md py-2 text-[14px] px-3.5'>
            {"checkout ->"}</a>
        }
        </div>
     </VerticalTimelineElement>
  )
}

export default ExperienceCard
