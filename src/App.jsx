import NavBar from './components/NavBar'
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import PostsLayout from './components/Layouts/PostsLayout'
import MyPosts from './components/MyPosts'
import NewPost from './components/NewPost'
import './App.css'
import ParkingLayout from './components/Layouts/ParkingLayout';
import ResidentPark from './components/ResidentPark';
import { faHouse, faSquareRss, faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import AuthLayout from './components/Layouts/AuthLayout';

function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <div>
      <NavBar />
      {isLoggedIn === false && <Container>
        <AuthLayout />
      </Container>}
      {isLoggedIn && <Container>
        <Row>
          <Col sm={2} className='sidebar' >
            <NavLink to='/' style={{ display: 'block' }} className='side-link'><FontAwesomeIcon icon={faHouse} /> Home</NavLink>
            <NavLink to='/posts' className='side-link' ><FontAwesomeIcon icon={faSquareRss} /> Posts</NavLink>
            <NavLink to='/parking' className='side-link'><FontAwesomeIcon icon={faSquareParking} /> Parking</NavLink>
          </Col>
          <Col className='posts' sm={10} >
            <Routes>
              <Route path='/auth' element={<AuthLayout />} />
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<PostsLayout />}>
                <Route index element={<Posts />} />
                <Route path=':userId' element={<MyPosts />} />
                <Route path=':userId/newPost' element={<NewPost />} />
              </Route>
              <Route path='/parking' element={<ParkingLayout />}>
                <Route index element={<ResidentPark />} />
                <Route path='visitor' element={<ResidentPark />} />
                <Route path='register/resident' element={<ResidentPark />} />
                <Route path='register/visitor' element={<ResidentPark />} />
              </Route>

            </Routes>
          </Col>
        </Row>
      </Container>}
    </div>
  )
}

export default App
