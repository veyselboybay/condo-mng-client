import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SignIn = () => {
    return (
        <Form className='auth-form'>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" size='md'>Sign In</Button>
            </div>
        </Form>
    )
}

export default SignIn