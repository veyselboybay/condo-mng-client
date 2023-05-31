import NavBar from '../components/NavBar'
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import Posts from '../components/Posts'
import PostsLayout from '../components/Layouts/PostsLayout'
import MyPosts from '../components/MyPosts'
import NewPost from '../components/NewPost'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col sm={2} >
            <Link to='/' style={{ display: 'block' }} className='side-link'>Home</Link>
            <Link to='/posts' className='side-link'>Posts</Link>
          </Col>
          <Col className='posts' sm={10} >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<PostsLayout />}>
                <Route index element={<Posts />} />
                <Route path=':userId' element={<MyPosts />} />
                <Route path=':userId/newPost' element={<NewPost />} />
              </Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
