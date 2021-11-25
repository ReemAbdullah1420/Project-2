import { Carousel } from "react-bootstrap"
import styles from "./Offers.module.css"

function Offers() {
  return (
    <>
      <h1 className={styles.titel}>Amazing offers for every traveler</h1>
      <Carousel className="d-block mx-auto mt-5" style={{ width: "75%", marginBottom: 40 }}>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 "
            height="500px"
            src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <p> A special trip, a wonderful atmosphere, with the breeze of nature</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height="500px"
            src="https://images.pexels.com/photos/3145426/pexels-photo-3145426.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Choose Your Destination With My Trip A Vision You Can See The World</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height="500px"
            src="https://images.pexels.com/photos/3411135/pexels-photo-3411135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>family show</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Offers
