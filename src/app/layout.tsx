import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './components/ThemeProvider'
import Themechanger from './components/Themechanger'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'ToDo App',
  description: 'ToDo app - Next, Firebase and TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <div className="overflow-x-hidden">
            <Themechanger />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
