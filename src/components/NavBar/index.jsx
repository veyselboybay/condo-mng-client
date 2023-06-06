import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const { user, isLoggedIn } = useSelector(state => state.auth);
    return (
        <Navbar>
            <Container className='nav-bar'>
                <Navbar.Brand href="#home">My Condo Management</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {isLoggedIn && <Navbar.Text>
                        Signed in as: {user.firstName} ||  <a href='#'><FontAwesomeIcon icon={faRightFromBracket} /> Logout</a>
                    </Navbar.Text>}
                    {/* {isLoggedIn === false && <Navbar.Text>
                        <a href='#'><FontAwesomeIcon icon={faRightToBracket} /> Login</a>
                    </Navbar.Text>} */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;