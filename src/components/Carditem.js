import { Card, Button } from "react-bootstrap"


function Carditem() {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Img variant="top" src={} />
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
