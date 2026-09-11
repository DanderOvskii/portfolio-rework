'use client'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { useLenis } from 'lenis/react'
import { navItems } from './navConfig'
import { useRouter } from 'next/navigation'
import SvgBarComp from '@/components/svgs/svgBarComp'
import PageButton from '@/components/buttons/pageButton'

import { getUser,clearUser } from '@/utils/sessionStorage'

const NavBarPC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const lenis = useLenis()
  const router = useRouter()
  const handleClick = (route: string, hash: string) => {
    const isHome = window.location.pathname === route

    if (isHome) {
      // Navigate to target page with hash
      lenis?.scrollTo(hash)
    } else {
      // Already on the page, scroll immediately
      router.push(`${route}${hash}`)
    }
  }

  useEffect(() => {
    const user = getUser()
    setIsLoggedIn(Boolean(user?.id || user?.email))
      if (user?.role === 'ADMIN') {
      setIsAdmin(true)
    }
    console.log('isLoggedIn:', isLoggedIn)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setIsVisible(false)
      } else {
        // scrolling up → show
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  return (
    <>
      <div
        className={`pl-align-left bg-ds-black/10 backdrop-blur-[5px] backdrop-filter w-full h-[10vh] hidden md:flex items-center md:display-block display-none  justify-start fixed font-[jose] z-10 transition-all ease-in-out duration-1000 ${
          isVisible ? 'translate-y-0' : 'translate-y-[-10vh]'
        }`}
      >
        <div className='w-1/2 flex justify-between items-center gap-12.5 '>
          {navItems.map((item, index) => (
            <button
              className='no-underline subtitle transition-all ease-in-out duration-200 hover:text-ds-yellow '
              onClick={() => handleClick(item.route, item.hash)}
              key={index}
            >
              <p>{item.label}</p>
            </button>
          ))}

          {isAdmin && (
          <button
              className='no-underline subtitle transition-all ease-in-out duration-200 hover:text-ds-yellow '
              onClick={() => handleClick("admin", "/")}
            >
              <p>admin</p>
            </button>
          )}
        </div>
      </div>

      <div
        id='Menu'
        className={`fixed w-full h-dvh bg-ds-light-blue ${
          menuOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'
        } transition-all duration-500 flex flex-col justify-center md:justify-between md:flex-row right-0 z-20`}
      >
        <div className='half-container  ml-align-left '>
          {navItems.map((item, index) => (
            <button
              className=' title transition-all duration-500 hover:tracking-[10px] hover:text-ds-yellow w-fit text-ds-white'
              onClick={() => {
                setMenuOpen(false)
                handleClick(item.route, item.hash)
              }}
              key={index}
            >
              <p>{item.label}</p>
            </button>
          ))}
          {isAdmin && (
            <a href='/admin' onClick={() => setMenuOpen(false)}>
              <p className=' title transition-all duration-500 hover:tracking-[10px] hover:text-ds-yellow w-fit text-ds-white'>
                admin
              </p>
            </a>
          )}
        </div>

        <div className='half-container gap-5 '>
          <div className=' flex flex-col justify-center items-center gap-5'>
            <PageButton text='contact me' link='/contact' />
          </div>
          {isLoggedIn && (
            <div className='w-full flex flex-col align-middle justify-center items-center gap-5 '>
              <button
                onClick={() => {setMenuOpen(open => !open); clearUser()}}
                className='button48 max-w-fit z-30'
                type='button'
              >
                <span>logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='h-[10vh] flex justify-end items-center fixed aspect-[1.1] mr-align-left right-0 z-30'>
        <button
          type='button'
          onClick={() => setMenuOpen(open => !open)}
          className='bg-transparent border-none p-0 m-0 cursor-pointer'
          aria-label='Toggle menu'
        >
          <SvgBarComp
            className={`h-[5vh] transition-all duration-500  ${
              menuOpen ? '-rotate-90 fill-ds-yellow' : 'rotate-0 fill-ds-white'
            }`}
            id='Burger'
          />
        </button>
      </div>
    </>
  )
}

export default NavBarPC
