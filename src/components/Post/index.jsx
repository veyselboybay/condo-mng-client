import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Post = () => {
    return (
        <Card className='post'>
            <Card.Header as="h6" className='card-header'><span className='post postTopic'>Maintenance</span></Card.Header>
            <Card.Body>
                <Card.Title>Elevator Fix</Card.Title>
                <Card.Text>
                    Dear Residents,<br />Elevator will be out of work till midnight today.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <Card.Text className='post footer'>By management/12:12 pm</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Post