import styles from "./video.module.css"
import video from "../video/production ID_4512518.mp4"
function Video() {
  return (
    <>
      <video className={styles.video} src={video} autoPlay muted loop></video>
    </>
  )
}

export default Video
