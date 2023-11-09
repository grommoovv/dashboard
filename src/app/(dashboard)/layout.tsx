import { Footer } from '@/layout/footer'
import { Navbar } from '@/layout/navbar'
import { Sidebar } from '@/layout/sidebar'
import styles from './layout.module.css'
import { FC, PropsWithChildren } from 'react'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout
