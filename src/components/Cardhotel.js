import { Card ,Button} from "react-bootstrap"

function Cardhotel (props) {
    const {hotels}=props
    return ( 

<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{hotels.name}</Card.Title>
    <Card.Text>
      {hotels.starRating}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

     )
}

export default Cardhotel 