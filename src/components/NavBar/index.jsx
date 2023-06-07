import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from '../../features/Auth/authSlice';


const NavBar = () => {
    const { user, isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <Navbar>
            <Container className='nav-bar'>
                <Navbar.Brand href="#home">My Condo Management</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {isLoggedIn && <Navbar.Text>
                        Signed in as: {user.firstName} ||  <button style={{ border: 'none' }} type='button' onClick={() => dispatch(logoutUser())}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</button>
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