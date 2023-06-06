import NavBar from './components/NavBar'
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import PostsLayout from './components/Layouts/PostsLayout'
import MyPosts from './components/MyPosts'
import NewPost from './components/NewPost'
import './App.css'
import ParkingLayout from './components/Layouts/ParkingLayout';
import ResidentPark from './components/ResidentPark';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col sm={2} >
            <Link to='/' style={{ display: 'block' }} className='side-link'>Home</Link>
            <Link to='/posts' className='side-link'>Posts</Link>
            <Link to='/parking' className='side-link'>Parking</Link>
          </Col>
          <Col className='posts' sm={10} >
            <Routes>
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
      </Container>
    </div>
  )
}

export default App
