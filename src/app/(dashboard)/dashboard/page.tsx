import { Card } from '@/shared/ui/card/card'
import { Chart } from '@/shared/ui/chart/chart'
import { Transactions } from '@/widgets/transactions'
import cls from './page.module.scss'
import { cardsInfo } from '@/shared/mock'

const Page = () => {
  return (
    <div className={cls.page}>
      <div className={cls.main}>
        <div className={cls.cards}>
          {cardsInfo.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  )
}

export default Page
