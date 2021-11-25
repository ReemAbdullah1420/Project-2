import { useContext } from "react"
import HotelProfile from "../components/HotelProfile"
import ItemsContext from "../utlis/ItemsContext"
import styles from "./Profile.module.css"

function Profile() {
  const { profile, items, getitem } = useContext(ItemsContext)
  console.log(profile)
  if (!profile) {
    return <h1>Loding.....</h1>
  }
  if (profile.items._id === items._id) {
    return (
      <>
        <div>
          <h1 className={styles.account}>My Account</h1>
        </div>
        <div className={styles.Profile}>
          <img src={profile.photo} className={styles.img} />
          <div className={styles.person}>
            <h2 className={styles.Name}>
              {" "}
              Name :{profile.firstName} {profile.lastName}
            </h2>
            <p className={styles.email}>Email : {profile.email}</p>
          </div>
        </div>
        <HotelProfile />
      </>
    )
  }
}

export default Profile
