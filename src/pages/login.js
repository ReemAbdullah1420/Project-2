import { useContext } from "react"
import Backgraond from "../components/backgraond"
import ItemsContext from "../utlis/ItemsContext"
import styles from "./login.module.css"
function Login() {
  const { login } = useContext(ItemsContext)
  return (
    <>
      <Backgraond />
      <div className={styles.formlogin}>
        <h1>Welcom Back</h1>
        <form className={styles.form} onSubmit={login}>
          <label className={styles.label}> Email :</label>
          <br />
          <input type="email" placeholder="Enter Email " required className={styles.input} name="email" />
          <br />
          <label className={styles.label}> Password :</label>
          <br />
          <input type="password" placeholder="Enter password " required className={styles.input} name="password" />
          <br />
          <a href="#">Forgot Password?</a>
          <button className={styles.btn}> log in </button>
        </form>
      </div>
    </>
  )
}

export default Login
