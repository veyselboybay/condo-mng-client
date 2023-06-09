import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Post = ({ title, topic, userGroup, description, createdAt }) => {
    const newDate = new Date(createdAt);
    return (
        <Card className='post'>
            <Card.Header as="h6" className='card-header'><span className='post postTopic'>{topic}</span></Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <Card.Text className='post footer'>By {userGroup} - {newDate.toLocaleDateString()}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Post