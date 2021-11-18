import { Card } from "react-bootstrap"

function Cardhotel(props) {
  const { hotels } = props
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Body>
        <Card.Title>{hotels.name}</Card.Title>
        <Card.Text>{hotels.currency}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cardhotel
