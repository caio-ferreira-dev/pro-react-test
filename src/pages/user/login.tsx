import AuthForm from "../../../components/ui/AuthForm";
import styles from "@/styles/pages/user/Login.module.css";

export default function Login() {
  return (
    <main className={styles.authContainer}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Login</h2>
        <AuthForm inputNames={['Login', 'password']} page="Login"/>
      </div>
    </main>
  )
}
