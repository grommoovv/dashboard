import styles from './page.module.css'
import { LoginForm } from '@/widgets/loginForm'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
