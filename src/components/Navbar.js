import { Navbar,Container,Nav } from "react-bootstrap"

function NavbarItem () {
    return (

        <Navbar  bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">My Trip</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Destinations</Nav.Link>
          <Nav.Link href="#features">Signup</Nav.Link>
          <Nav.Link href="#pricing">login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      )
}

export default NavbarItem