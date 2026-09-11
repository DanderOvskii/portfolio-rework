import react from 'react'
import Link from 'next/link'
const PageButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link}>
      <button className='button48' role='button'>
       <span> {text}</span>
      </button>
    </Link>
  )
}
export default PageButton
