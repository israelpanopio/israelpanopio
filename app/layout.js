import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Israel Panopio',
  description: "I'm a web developer and a permanent resident of Canada. I am a Filipino who likes chasing sunsets.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app">
        {children}
      </body>
    </html>
  )
}
