import './globals.css'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oru Phones',
  description: 'Designed by Rana Ahmed',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout;