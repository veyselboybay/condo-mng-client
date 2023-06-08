import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const ParkingLayout = () => {
    const { user } = useSelector(state => state.auth);
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/parking">
                <Nav.Item>
                    <Nav.Link eventKey="visitor" as={Link} to={'/parking/visitor'}>Visitor Parking</Nav.Link>
                </Nav.Item>
                {user.userGroup && user.userGroup === 'management' && <>
                    <Nav.Item>
                        <Nav.Link eventKey="parking" as={Link} to={'/parking'}>Resident Parking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="register" as={Link} to={'/parking/register/resident'} style={{ color: 'cadetblue' }}>Register Resident Parking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="register-visitor" as={Link} to={'/parking/register/visitor'} style={{ color: 'cadetblue' }}>Register Visitor Parking</Nav.Link>
                    </Nav.Item></>}
            </Nav>
            <Outlet />
        </>
    )
}

export default ParkingLayout