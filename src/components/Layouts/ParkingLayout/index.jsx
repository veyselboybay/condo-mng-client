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
                {user.userGroup && (user.userGroup === 'management' || user.userGroup === 'security') && <>
                    <Nav.Item>
                        <Nav.Link eventKey="parking" as={Link} to={'/parking'}>Resident Parking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="register" as={Link} to={'/parking/register'} style={{ color: 'cadetblue' }}>Register Parking</Nav.Link>
                    </Nav.Item></>}
            </Nav>
            <Outlet />
        </>
    )
}

export default ParkingLayout