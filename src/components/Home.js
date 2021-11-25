import styles from "./Home.module.css"
import Title from "./Title"
function Home() {
  return (
    <>
      <div>
        <Title />
        <img
          className={styles.contener}
          src="https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt=""
        />
      </div>
    </>
  )
}

export default Home
