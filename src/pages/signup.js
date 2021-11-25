import styles from "./signup.module.css"
import Video from "../components/video"
import Foter from "../components/foter"
import { useContext } from "react"
import ItemsContext from "../utlis/ItemsContext"

function Signup() {
  const { signup } = useContext(ItemsContext)
  return (
    <>
      <Video />
      <div className={styles.formSignup}>
        <h1>Create Account </h1>
        <form className={styles.form} onSubmit={signup}>
          <label className={styles.label}> First Name :</label>
          <br />
          <input type="text" placeholder=" firstName " required className={styles.input} name="firstName" />
          <br />
          <label className={styles.label}> last Name :</label>
          <br />
          <input type="text" placeholder="lastName " required className={styles.input} name="lastName" />
          <br />
          <label className={styles.label}> Email :</label>
          <br />
          <input type="email" placeholder="Enter Email " required className={styles.input} name="email" />
          <br />
          <label className={styles.label}> Password :</label>
          <br />
          <input type="password" placeholder="Enter password " required className={styles.input} name="password" />

          <br />
          <label className={styles.label} placeholder="photo">
            Photo:
          </label>
          <br />
          <input type="url" required className={styles.input} name="photo" />
          <br />
          <button className={styles.btn}> Sign Up </button>
        </form>
      </div>
      <Foter />
    </>
  )
}

export default Signup
