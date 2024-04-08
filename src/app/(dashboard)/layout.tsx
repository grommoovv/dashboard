import { Header } from '@/layout/navbar'
import { Sidebar } from '@/layout/sidebar'
import cls from './layout.module.scss'
import { FC, PropsWithChildren } from 'react'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cls.layout}>
      <div className={cls.sidebar}>
        <Sidebar />
      </div>
      <div className={cls.content}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default RootLayout
