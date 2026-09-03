import React from 'react'
import dynamic from 'next/dynamic'
import SocialButtons from '@/components/buttons/socialButtons'
const CharacterScene = dynamic(() => import("@/components/3d/scenes/characterScene"), { ssr: false });

const AboutMe = () => {
  return (
    <div id='aboutme' className='container'>
      <div className='half-container'>
        <div className='bg-ds-yellow w-[60%] aspect-3/5 rounded-full overflow-hidden shadow-lg'>
          <CharacterScene />
        </div>
      </div>
      <div className='half-container'>
        <p className='title'>
            About Me
          </p>
             <p className='norm-text mb-5'>
            I&apos;m really into software development, 3D modeling, and staying
            active. I enjoy solving problems with code and exploring new tech as
            it comes out. I also love bringing ideas to life in 3D and keeping a
            balanced lifestyle through fitness. I&apos;m always looking to
            learn, try new things, and work on projects that mix creativity with
            problem-solving.{' '}
          </p>
          <SocialButtons />
      </div>
    </div>
  )
}
export default AboutMe
