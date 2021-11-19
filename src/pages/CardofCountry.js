import styles from "./CardofCountry.module.css"
function CardCountry() {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/3215009/pexels-photo-3215009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <h2>Title:poikoijk</h2>
        </div>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/3215009/pexels-photo-3215009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <h2>Title:poikoijk</h2>
        </div>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/3215009/pexels-photo-3215009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <h2>Title:poikoijk</h2>
        </div>
      </div>
    </>
  )
}

export default CardCountry
