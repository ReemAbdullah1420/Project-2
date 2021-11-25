import styles from "./foter.module.css"
import { MdEmail } from "react-icons/md"
import { FaCcApplePay } from "react-icons/fa"
import { FaFacebookSquare, FaSnapchatSquare, FaLinkedin, FaTwitterSquare, FaPhoneAlt } from "react-icons/fa"
function Foter() {
  return (
    <>
      <section className={styles.foter}>
        <div className={styles.contact}>
          <p>
            <FaFacebookSquare />
          </p>
          <p>
            <FaTwitterSquare />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaSnapchatSquare />
          </p>
        </div>
        <div className={styles.call}>
          <img className={styles.imgs} src="https://d12r75k5fx2b32.cloudfront.net/media/wysiwyg/Mastercard-logo.png" />
          <img
            className={styles.imgs}
            src="https://www.alahli.com/en-us/about-us/csr/PublishingImages/mada-logo-474-Px.png"
          />
          <img
            className={styles.imgs}
            src="https://img2.arabpng.com/20180527/vbc/kisspng-apple-pay-mobile-payment-google-pay-5b0b0a0023c625.7737993415274501121465.jpg"
          />
        </div>
        <div className={styles.contacts}>
          <p className={styles.p}> ©2018-2021 WPEngine,Inc Allrights reserved</p>
          <p className={styles.p}>
            WP ENGINE℗ , VELOCITIZE℗ , TORQUE ℗, EVERCACHE,and the cog logo servise markes are owned by WPEngine, Inc
          </p>
        </div>
      </section>
    </>
  )
}

export default Foter
