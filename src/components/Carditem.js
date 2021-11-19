import { Card, Button } from "react-bootstrap"


function Carditem() {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/18/49/a5/e0/sur-grand-hotel.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Carditem
