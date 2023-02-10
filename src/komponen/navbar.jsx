import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">M Khoirul Basyar</Navbar.Brand>
                <Nav className="text-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Project</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;