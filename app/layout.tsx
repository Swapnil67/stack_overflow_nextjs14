import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/context/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: 'DevFLow',
  icons: {
    icon: '/assets/images/site-logo.svg'
  },
  description: 'A community driven platform for asking and answering questions Get help, sharing knowledge and collaborate with developers around the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} ${spaceGrotesk.variable}`}>
          <ClerkProvider>
            <ThemeProvider> {children} </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
  )
}
