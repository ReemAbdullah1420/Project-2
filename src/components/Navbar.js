import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { FaPlaneDeparture } from "react-icons/fa"
import { useContext } from "react"
import ItemsContext from "../utlis/ItemsContext"

function NavbarItem() {
  const { logout } = useContext(ItemsContext)
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h3>
            MY TRIP <FaPlaneDeparture />
          </h3>
        </div>
        <div>
          <ul className={styles.navbar_list}>
            {localStorage.tokenitem ? (
              <>
                {" "}
                <li className={styles.navbar_items}>
                  <Link className={styles.navbar_items} to="/">
                    Home
                  </Link>
                </li>
                <li className={styles.navbar_items}>
                  <Link className={styles.navbar_items} to="/destinations">
                    Destinations
                  </Link>
                </li>
                <li className={styles.navbar_items}>
                  <Link className={styles.navbar_items} to="/profile">
                    profile
                  </Link>
                </li>
              </>
            ) : null}
            {localStorage.tokenitem ? (
              <li className={styles.navbar_items}>
                <Link className={styles.navbar_items} to="/" onClick={logout}>
                  log out
                </Link>
              </li>
            ) : (
              <li className={styles.navbar_items}>
                <Link className={styles.navbar_items} to="/login">
                  log in
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavbarItem
