import React from 'react'
import { Container } from 'react-bootstrap'
import img from '../../assets/toronto.jpg'

const Home = () => {
    return (
        <Container>
            <img src={img} alt='toronto' style={{ width: 'inherit', height: '30vh' }} />
            <Container>
                <h3 style={{ textAlign: 'center', marginTop: '5vh' }}>Welcome to Condo Management</h3>

            </Container>
        </Container>
    )
}

export default Home