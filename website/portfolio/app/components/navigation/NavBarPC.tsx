'use client'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { useLenis } from 'lenis/react'
import { navItems } from './navConfig'
import { useRouter } from 'next/navigation'

const NavBarPC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const lenis = useLenis()
  const router = useRouter();
  const handleClick = (route: string, hash: string) => {
    const isHome = window.location.pathname === route

    if (isHome) {
      // Navigate to target page with hash
      lenis?.scrollTo(hash);
    } else {
      // Already on the page, scroll immediately
      router.push(`${route}${hash}`);
    }
  };
  return (
   <>
      <div
        className={`w-full h-[10vh] hidden md:flex items-center justify-start fixed font-[jose] z-10 transition-all ease-in-out duration-1000 ${
          isVisible ? 'translate-y-0' : '-translate-y-[10vh]'
        }`}
      >
        <div className='w-1/2 flex justify-between items-center gap-[50px] '>
          <a
            className='no-underline text-just-white text-subtitle transition-all ease-in-out duration-200 hover:text-header-color '
            href='/#top'
          >
            <p>home</p>
          </a>

          {isAdmin && (
            <a
              className='no-underline text-just-white text-subtitle transition-all ease-in-out duration-200 hover:text-header-color '
              href='/admin'
            >
              <p>admin</p>
            </a>
          )}
        </div>
      </div>

      <div
        id='Menu'
        className={`fixed w-full h-dvh bg-background-light ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-all duration-500 flex flex-col justify-center md:justify-between md:flex-row right-0 z-10`}
      >
        <div className='w-full screen relative float-left flex flex-col justify-center'>
          <div className=' ml-align-left'>
            <a href='/#welkom' onClick={() => setMenuOpen(false)}>
              <p className='relative font-medium text-title font-jose transition-all duration-500 hover:tracking-[10px] hover:text-header-color w-fit text-just-white'>
                home
              </p>
            </a>
            {isAdmin && (
              <a href='/admin' onClick={() => setMenuOpen(false)}>
                <p className='relative font-medium text-title font-jose transition-all duration-500 hover:tracking-[10px] hover:text-header-color w-fit text-just-white'>
                  admin
                </p>
              </a>
            )}
          </div>
        </div>

        <div className='w-full screen relative float-right flex flex-col justify-center items-center'>
          <div className='relative flex flex-col justify-center items-center gap-5'>
            <a
              href='/contact'
              className=' no-underline text-just-white text-subtitle transition-all ease-in-out duration-200 hover:text-header-color '
            >
              <button className="button48" role='button'>
                <span>contact me</span>
              </button>
            </a>
          </div>
          {/* {isLoggedIn && (
            <div className='relative flex flex-col justify-center items-center gap-5'>
              <button
                onClick={logoutUser}
                className={styles.button48}
                role='button'
              >
                <span>logout</span>
              </button>
            </div>
          )} */}
        </div>
      </div>
      <div className='h-[10vh] flex justify-end items-center fixed aspect-[1.1] mr-align-left right-0 z-10'>
        <button
          type='button'
          onClick={() => setMenuOpen(open => !open)}
          className='bg-transparent border-none p-0 m-0 cursor-pointer'
          aria-label='Toggle menu'
        >
          <img
            className={`h-[5vh] transition-all duration-500 invert ${
              menuOpen ? '-rotate-90' : 'rotate-0'
            }`}
            src='icons/bars-solid (1).svg'
            alt='Menu'
            id='Burger'
          />
        </button>
      </div>
    </>
  )
}

export default NavBarPC
