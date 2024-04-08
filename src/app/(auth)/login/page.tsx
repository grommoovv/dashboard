import styles from './page.module.scss'
import { LoginForm } from '@/widgets/loginForm'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
