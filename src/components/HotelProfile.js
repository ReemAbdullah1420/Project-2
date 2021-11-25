import { useContext, useState } from "react"
import ItemsContext from "../utlis/ItemsContext"
import styles from "./HotelProfile.module.css"
import { FaTrash, FaUserEdit } from "react-icons/fa"
import EditModel from "./editmodel"
function HotelProfile() {
  const [show, setShow] = useState(false)
  const { deleteitme, profile } = useContext(ItemsContext)
  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  return (
    <div>
      {profile.items.map(book => {
        let date = new Date(book.start)
        let startday = date.getDate()
        let startmonth = date.getMonth() + 1
        let startyear = date.getYear() + 1900
        date = new Date(book.end)
        let endday = date.getDate()
        let endmonth = date.getMonth() + 1
        let endyear = date.getYear() + 1900
        return (
          <>
            <div className={styles.booking}>
              <div className={styles.imge}>
                <img src={book.image} className={styles.imgess} />
              </div>
              <div className={styles.information}>
                <h1 className={styles.title}> Name Hotel:{book.title}</h1>
                <p className={styles.startdata}>Start Date</p>
                <p className={styles.start}>
                  {startday}-{startmonth}-{startyear}
                </p>
                <p className={styles.enddata}>End Date</p>
                <p className={styles.start}>
                  {endday}-{endmonth}-{endyear}
                </p>
                <p className={styles.price}> Price :{book.description}</p>
              </div>
              <button
                className={styles.buttondelet}
                onClick={() => {
                  deleteitme(book._id)
                }}
              >
                delete <FaTrash />
              </button>

              <button className={styles.buttonedit} onClick={handleShow}>
                edit <FaUserEdit />
              </button>
            </div>
            <EditModel show={show} handleClose={handleClose} book={book} />
          </>
        )
      })}
    </div>
  )
}

export default HotelProfile
