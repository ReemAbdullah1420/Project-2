import { useContext } from "react"
import { FaAngleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import ItemsContext from "../utlis/ItemsContext"
import styles from "./CardofCountry.module.css"
function CardCountry() {
  const { destinationId } = useContext(ItemsContext)

  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <h2 className={styles.h2}>Malisa</h2>
          <Link className={styles.viwe} to={`/hotels/908873`}>
            View <FaAngleRight />
          </Link>
        </div>
        <div className={styles.card2}>
          <h2 className={styles.h2}>London</h2>
          <Link className={styles.viwe} to={`/hotels/549499`}>
            View <FaAngleRight />
          </Link>
        </div>
        <div className={styles.card3}>
          <h2 className={styles.h2}>Dubai</h2>
          <Link className={styles.viwe} to={`/hotels/11594`}>
            View <FaAngleRight />
          </Link>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card4}>
          <h2 className={styles.h2}>Paris</h2>
          <Link className={styles.viwe} to={`/hotels/504261`}>
            View <FaAngleRight />
          </Link>
        </div>
        <div className={styles.card5}>
          <h2 className={styles.h2}>Bali</h2>
          <Link className={styles.viwe} to={`/hotels/662985`}>
            View <FaAngleRight />
          </Link>
        </div>
        <div className={styles.card6}>
          <h2 className={styles.h2}>Greece</h2>
          <Link className={styles.viwe} to={`/hotels/593632`}>
            View <FaAngleRight />
          </Link>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card7}>
          <h2 className={styles.h2}>Maldives</h2>
          <Link className={styles.viwe} to={`/hotels/10233105`}>
            View <FaAngleRight />
          </Link>
        </div>
        <div className={styles.card8}>
          <h2 className={styles.h2}>Bosina</h2>
          <Link className={styles.viwe} to={`/hotels/110206`}>
            View <FaAngleRight />
          </Link>
        </div>
        <div className={styles.card9}>
          <h2 className={styles.h2}>Ukraine</h2>
          <Link className={styles.viwe} to={`/hotels/1378654`}>
            View <FaAngleRight />
          </Link>
        </div>
      </div>
    </>
  )
}

export default CardCountry
