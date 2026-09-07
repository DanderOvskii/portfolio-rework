'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import NavBarPC from '@/components/navigation/NavBarPC'
import Layout from '@/components/Layout'
import { ReactLenis } from '@/utils/lenis'

import Footer from "@/components/pageSections/footer";

export default function RootLayoutClient ({
  children
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const noHeaderPaths =
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname.startsWith('/projects')

  const noFooterPaths = pathname === '/login' || pathname === '/signup'

  return (
    <ReactLenis root>
      <body className='antialiased scroll-smooth lg:subpixel-antialiased bg-ds-blue'>
        <Layout>
          {!noHeaderPaths && <NavBarPC />}
          {children}
        </Layout>
        {!noFooterPaths && <Footer />}
      </body>
    </ReactLenis>
  )
}
