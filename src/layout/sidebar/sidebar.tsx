import Image from 'next/image'
import { MenuLink } from '@/shared/ui/menuLink'
import cls from './sidebar.module.scss'
import { menuItems } from '@/shared/mock'
import { MdLogout } from 'react-icons/md'

// import { auth, signOut } from '@/app/auth'

const Sidebar = async () => {
  // const { user } = await auth()
  return (
    <div className={cls.sidebar}>
      <ul className={cls.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={cls.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <form
        action={async () => {
          'use server'
          // await signOut()
        }}
      >
        <button className={cls.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  )
}

export { Sidebar }
