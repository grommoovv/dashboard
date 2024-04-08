import Image from 'next/image'
import styles from './transactions.module.scss'

const transactions = [
  {
    id: 1,
    user: {
      imageURL: '/noavatar.png',
      name: 'George Gromov',
    },
    status: 'Pending',
    date: '08.11.2023',
    amount: 6200,
  },
  {
    id: 2,
    user: {
      imageURL: '/noavatar.png',
      name: 'Maison Margiela',
    },
    status: 'Done',
    date: '08.11.2023',
    amount: 10200,
  },
  {
    id: 3,
    user: {
      imageURL: '/noavatar.png',
      name: 'John Wick',
    },
    status: 'Cancelled',
    date: '08.11.2023',
    amount: 10200,
  },
  {
    id: 4,
    user: {
      imageURL: '/noavatar.png',
      name: 'Peter Parker',
    },
    status: 'Pending',
    date: '08.11.2023',
    amount: 5200,
  },
]

const Transactions = () => {
  return (
    <div className={styles.transactions}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <div className={styles.table}>
        <div className={styles.table_head}>
          <div className={styles.table_head_cell}>Name</div>
          <div className={styles.table_head_cell}>Status</div>
          <div className={styles.table_head_cell}>Date</div>
          <div className={styles.table_head_cell}>Amount</div>
        </div>
        <div className={styles.table_body}>
          {transactions.map((t) => (
            <div className={styles.table_body_row} key={t.id}>
              <div className={styles.table_body_cell}>
                <div className={styles.user}>
                  <Image
                    src={t.user.imageURL}
                    alt=''
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {t.user.name}
                </div>
              </div>
              <div className={styles.table_body_cell}>
                <p className={`${styles.status} ${t.status.toLowerCase()}`}>{t.status}</p>
              </div>
              <div className={styles.table_body_cell}>{t.date}</div>
              <div className={styles.table_body_cell}>$ {t.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Transactions }
