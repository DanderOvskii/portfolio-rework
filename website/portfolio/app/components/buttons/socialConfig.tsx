import { SocialItem } from '@/types'
import SvgGitHub from '../svgs/svgGitHub'
import SvgInsta from '../svgs/svgInsta'
import SvgLinkedIn from '../svgs/svrLinkedin'

export const socialItems: SocialItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/DanderOvskii?tab=repositories',
    icon: props => <SvgGitHub className='social-button' id='Burger' />
  },
    {
    label: 'Instagram',
    href: 'https://www.instagram.com/danderovskiii/',
    icon: props => <SvgInsta className='social-button' id='Burger' />
    },
    {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dander-siegers-8596a724b/',
    icon: props => <SvgLinkedIn className='social-button' id='Burger' />
    }
]
