import { useContext } from "react"
import { Modal, Button, Form, Row, Col } from "react-bootstrap"
import ItemsContext from "../utlis/ItemsContext"
function EditModel(props) {
  const { confirm } = useContext(ItemsContext)
  const { show, handleClose, book } = props
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
      <>
        <Modal className="mx-6 mb-3" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title> EDIT BOOKING</Modal.Title>
          </Modal.Header>
          <Form className="mx-6 mb-3" onSubmit={e => confirm(e, book._id)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>day</Form.Label>
                <Form.Select aria-label="Default select example" name="startday" defaultValue={startday}>
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
                <Form.Select aria-label="Default select example" name="startmonth" defaultValue={startmonth}>
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
                <Form.Select aria-label="Default select example" name="startyear" defaultValue={startyear}>
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
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>day</Form.Label>
                <Form.Select aria-label="Default select example" name="endday" defaultValue={endday}>
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
                <Form.Select aria-label="Default select example" name="endmonth" defaultValue={endmonth}>
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
                <Form.Select aria-label="Default select example" name="endyear" defaultValue={endyear}>
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
            <Button variant="success" type="submit" onClick={handleClose}>
              Confirm
            </Button>
          </Form>
        </Modal>
      </>
    </>
  )
}

export default EditModel
