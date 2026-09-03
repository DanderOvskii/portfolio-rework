'use client'

import Welkom from '@/components/pageSections/welkom';
import AboutMe from '@/components/pageSections/aboutMe';
export default function Home () {
  return (
      <div className='flex flex-col justify-center items-center '>
        <Welkom />
        <AboutMe />
      </div>
  )
}
