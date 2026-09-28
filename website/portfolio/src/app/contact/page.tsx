import { Metadata } from 'next'
import SocialButtons from '@/components/buttons/socialButtons'
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Here is how you can reach me'
}
export default function ContactPage () {
  return (
    <>
      <div className='container'>
        <div className='half-container'>
          <p className='title'>Contact Me</p>
          <p className='norm-text'>
            Email, call, or reach out using the details below.
          </p>
          <div className='w-3/4 h-2 bg-ds-yellow mt-2 mb-2 rounded-[20px]'></div>

          <div className='norm-text flex flex-col gap-2' >
            <p>Email: dander@roelsieg.nl</p>

            <p className='text-just-white/80'>Phone: +31 6 489 603 53</p>
            <SocialButtons />
          </div>
        </div>
        <div className='half-container'></div>
      </div>
    </>
  )
}
