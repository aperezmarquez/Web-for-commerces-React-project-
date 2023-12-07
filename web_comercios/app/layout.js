import { Ubuntu } from 'next/font/google'
import './globals.css'
import './layout.css'
import Link from 'next/link'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'] 
})

export const metadata = {
  title: 'Create Next App',
  description: 'A web for vintage sales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <nav className='flex justify-center'>
          <div className='grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 gap-10 p-3 sm:ml-7 md:ml-0'>
            <Link href='http://localhost:3000/' className='col-start-1 text-center seccion p-2 rounded-full sm:w-24 md:w-28 sm:text-xs md:text-sm lg:text-base'>
              HOME
            </Link>
            <Link href='http://localhost:3000/comercios' className='col-start-2 text-center seccion p-2 rounded-full sm:w-24 md:w-28 sm:text-xs md:text-sm lg:text-base'>
              COMMERCES
            </Link>
            <Link href='http://localhost:3000/sign-in' className='lg:col-end-6 md:col-end-5 sm:col-end-4 text-center seccion p-2 rounded-full sm:w-24 md:w-28 sm:text-xs md:text-sm lg:text-base'>
              SIGN IN
            </Link>
            <Link href='http://localhost:3000/register' className='lg:col-end-7 md:col-end-6 sm:col-end-5 text-center seccion p-2 rounded-full sm:w-24 md:w-28 sm:text-xs md:text-sm lg:text-base'>
              REGISTER
            </Link>
          </div>
        </nav>{children}
      </body>
    </html>
  )
}
