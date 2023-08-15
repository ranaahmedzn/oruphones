import AuthProvider from '@/providers/AuthProvider'
import './globals.css'
import { Outfit } from 'next/font/google'
import Toaster from '@/components/MyToaster'

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
      <body className={outfit.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout;