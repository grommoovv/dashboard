import { deleteUser } from '@/lib/actions'
import { fetchUsers } from '@/lib/data'
import { Pagination } from '@/widgets/pagination/pagination'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './page.module.scss'
import { Searchbar } from '@/widgets/searchbar/searchbar'

interface PageProps {
  searchParams?: {
    q: string
    page: string
  }
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { count, users } = await fetchUsers(q, page)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Searchbar placeholder='Search for user' />
        <Link href='/users/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt=''
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'active' : 'passive'}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type='hidden' name='id' value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default Page
