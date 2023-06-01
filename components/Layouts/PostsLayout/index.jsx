import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const PostsLayout = () => {
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/posts">
                <Nav.Item>
                    <Nav.Link eventKey="posts" as={Link} to={'/posts'}>All Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="myposts" as={Link} to={'/posts/2435354'}>My Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="newpost" as={Link} to={'/posts/2435354/newpost'} style={{ color: 'cadetblue' }}>Create Post</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </>
    )
}

export default PostsLayout