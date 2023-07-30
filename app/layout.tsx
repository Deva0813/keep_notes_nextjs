import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const body_font = Poppins({ weight: ["400"],subsets:["latin"]})

export const metadata: Metadata = {
  title: 'Keep Notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx( "default" ,body_font.className)} style={{background:"#F4F2DE"}} >{children}</body>
    </html>
  )
}
