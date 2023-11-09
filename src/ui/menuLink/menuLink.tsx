'use client'

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface MenuLinkProps {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  }
}

const MenuLink: FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.link} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export { MenuLink }
