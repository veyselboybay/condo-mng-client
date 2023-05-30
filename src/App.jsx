import NavBar from '../components/NavBar'
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import Posts from '../components/Posts'
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
              <Route path='/' element={<Home />}></Route>
              <Route path='/posts' element={<Posts />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
