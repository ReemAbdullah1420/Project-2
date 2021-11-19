import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
function NavbarItem() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h3>My Trip</h3>
        </div>
        <div>
          <ul className={styles.navbar_list}>
            <li className={styles.navbar_items}>
              <Link className={styles.navbar_items} to="/about">
                About
              </Link>
            </li>
            <li className={styles.navbar_items}>
              <Link className={styles.navbar_items} to="/destinations">
                Destinations
              </Link>
            </li>
            <li className={styles.navbar_items}>
              <Link className={styles.navbar_items} to="/hotel">
                Hotels
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavbarItem
