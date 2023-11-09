import { Rightbar } from '@/layout/rightbar'
import { Card } from '@/ui/card/card'
import { Chart } from '@/ui/chart/chart'
import { Transactions } from '@/widgets/transactions'
import styles from './page.module.css'
import { cardsInfo } from '@/lib/mock'

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cardsInfo.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Page
