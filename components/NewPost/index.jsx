import React from 'react'
import { Form, Button } from 'react-bootstrap';

const NewPost = () => {
    return (
        <div className='newPost'>
            <h3>New Post</h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Post Topic:</Form.Label>
                    <Form.Control type="text" placeholder="Maintenance" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Post Title:</Form.Label>
                    <Form.Control type="text" rows={3} placeholder='Elevator Fix' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Post Description:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Dear residents, ...' />
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

export default NewPost