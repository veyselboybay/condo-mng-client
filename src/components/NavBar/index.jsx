import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">My Condo Management</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;