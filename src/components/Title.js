import { Link } from "react-router-dom"
import styles from "./Title.module.css"

function Title() {
  return (
    <>
      <div className={styles.titles}>
        <h1 className={styles.Title}>Welcome to My Trip</h1>
        <h2 className={styles.H2}>Be part of our journey to power global travel for everyone, everywhere</h2>
        {localStorage.tokenitem ? null : (
          <Link to="/signup" className={styles.btn}>
            {" "}
            Sign Up
          </Link>
        )}
      </div>
    </>
  )
}

export default Title
