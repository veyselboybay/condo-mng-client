import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { login } from '../../../features/Auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const SignIn = () => {
    const dispatch = useDispatch();
    const { msg, success } = useSelector(state => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form className='auth-form'>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {success === false && <div className='error'><p>{msg}</p></div>}
            <div className="d-grid gap-2">
                <Button variant="primary" size='md' onClick={() => dispatch(login({
                    // "email": email,
                    // "password": password
                    email,
                    password,
                }))}>Sign In</Button>
            </div>
        </Form>
    )
}

export default SignIn