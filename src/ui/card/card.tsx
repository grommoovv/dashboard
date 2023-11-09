import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'
import { FC } from 'react'

interface CardProps {
  item: any
}

const Card: FC<CardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{' '}
          {item.change > 0 ? 'more' : 'less'} than previous week
        </span>
      </div>
    </div>
  )
}

export { Card }
