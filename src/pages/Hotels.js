import axios from "axios"
import { FaStar, FaChevronRight } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { useContext, useEffect, useState } from "react"
import { Container, Modal, Button, Form, Row, Col, Spinner } from "react-bootstrap"
import { useParams } from "react-router"
import ItemsContext from "../utlis/ItemsContext"
import styles from "./Hotels.module.css"

function Hotels() {
  const { addbooking } = useContext(ItemsContext)
  const [hotels, setHotels] = useState([])
  const [hotel, setHotel] = useState(null)
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }
  const handleOpen = () => {
    setShow(true)
  }
  const { destinationId } = useParams()
  const showHotels = async () => {
    try {
      const response = await axios.get(
        `https://hotels4.p.rapidapi.com/properties/list?destinationId=${destinationId}`,
        {
          headers: {
            "x-rapidapi-host": "hotels4.p.rapidapi.com",
            "x-rapidapi-key": "8497c61016mshbcaf4901920c2f3p1b886cjsnad0acdf0e726",
          },
        }
      )
      console.log(response.data)

      setHotels(response.data.data.body.searchResults.results)
    } catch (error) {
      // console.log(error)
    }
  }
  useEffect(() => {
    if (destinationId) showHotels()
  }, [])

  if (!hotels.length) {
    return (
      <div className={styles.loding}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  console.log(hotels)
  return (
    <>
      {hotels.map(hotel => (
        <>
          <div className={styles.card}>
            <div className={styles.imgs}>
              <img src={hotel.optimizedThumbUrls.srpDesktop} className={styles.imge} />
            </div>
            <div className={styles.informtion}>
              <h1>Hotel {hotel.name}</h1>
              <p>
                {" "}
                <HiLocationMarker />
                {hotel.neighbourhood}
              </p>
              <h2>
                <FaStar /> {hotel.starRating}
              </h2>
              <p className={styles.price}> Price :{hotel.ratePlan.price.current}</p>
              <p className={styles.p}> Inclusive of applicable taxes</p>
              <button
                className={styles.button}
                onClick={() => {
                  setHotel(hotel)
                  handleOpen()
                }}
              >
                {" "}
                Book Now <FaChevronRight />
              </button>
            </div>
          </div>
        </>
      ))}

      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Get offers for all seasons</Modal.Title>
          </Modal.Header>
          <Form className="mx-4 mb-3" onSubmit={e => addbooking(e, hotel)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Check in Date:</Form.Label>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>day</Form.Label>
                  <Form.Select aria-label="Default select example" name="startday">
                    <option>day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Month</Form.Label>
                  <Form.Select aria-label="Default select example" name="startmonth">
                    <option>month</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Year</Form.Label>
                  <Form.Select aria-label="Default select example" name="startyear">
                    <option>Year</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Check out Date:</Form.Label>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>day</Form.Label>
                    <Form.Select aria-label="Default select example" name="endday">
                      <option>day</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Month</Form.Label>
                    <Form.Select aria-label="Default select example" name="endmonth">
                      <option>month</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Year</Form.Label>
                    <Form.Select aria-label="Default select example" name="endyear">
                      <option>Year</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>The number of room:</Form.Label>
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Rooms</Form.Label>
                    <Form.Select aria-label="Default select example" name="rooms">
                      <option>room</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form.Group>
            </Row>
            <Button variant="success" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal>
      </Container>
    </>
  )
}

export default Hotels
