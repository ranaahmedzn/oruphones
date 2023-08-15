import './globals.css'
import {Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Oru Phones',
  description: 'Designed by Rana Ahmed',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}

export default RootLayout;