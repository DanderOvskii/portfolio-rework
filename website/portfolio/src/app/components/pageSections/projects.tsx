import { getProjects } from '@/db/apiCalls/projectApiCalls';
import { ProjectPreView } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Projects = () => {
    const [projects, setProjects] = useState<ProjectPreView[]>([]);
     console.log("projects", projects);
  
      useEffect(() => {
          getProjects().then(setProjects);
      }, []);
  return (
    <div
      id='projects'
      className='container  pl-0 pr-0  md:pl-align-left md:pr-align-right flex-col bg-ds-blue  rounded-tl-[200px] rounded-tr-[200px]'
    >
      <p className='title'>projects</p>
      <div className=' w-full md:w-4/5 h-[60vh] flex gap-5 overflow-x-scroll overflow-y-hidden whitespace-nowrap items-center select-cont'>
        {projects &&
          projects.map(project => (
            <div
              key={project.id}
              className='group h-4/5 aspect-square flex justify-center items-center flex-col transition-all ease-in-out duration-300 hover:scale-110 hover:mb-[60px]'
            >
              <Link
                href={`projects/${project.id}` || ''}
                className='h-4/5 aspect-square'
              >
                <div className='h-full aspect-square bottom-0 rounded-[20px] shadow-[0px_30px_8px_-13px_rgba(0,0,0,0.27)] transition-all ease-in-out duration-300 group-hover:shadow-[0px_45px_12px_-13px_rgba(0,0,0,0.27)]'>
                  <Image
                    src={project.image || ''}
                    alt={project.name}
                    className='w-full h-full object-cover rounded-[20px] contrast-50 grayscale transition-all ease-in-out duration-300 group-hover:contrast-100 group-hover:grayscale-0'
                    width={300}
                    height={300}
                    priority
                  />
                </div>
              </Link>
              <p className='subtitle transition-all duration-500 group-hover:text-ds-yellow'>
                {project.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Projects
