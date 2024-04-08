import { FC, PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import '@/shared/styles/globals.scss'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard Application developer with Next.js & TypeScript',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
