import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SignUp = () => {
    return (
        <Form className='auth-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='fname' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lname' />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" size='md'>Sign Up</Button>
            </div>
        </Form>
    )
}

export default SignUp