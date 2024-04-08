'use client'
import { usePathname } from 'next/navigation'
import cls from './header.module.scss'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Header = () => {
  const pathname = usePathname()

  return (
    <div className={cls.header}>
      <div className={cls.title}>{pathname.split('/').pop()}</div>
      <div className={cls.menu}>
        <div className={cls.search}>
          <MdSearch />
          <input type='text' placeholder='Search...' className={cls.input} />
        </div>
        <div className={cls.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export { Header }
