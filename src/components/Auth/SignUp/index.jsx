import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../../features/Auth/authSlice'


const SignUp = () => {
    const { msg, success } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const formData = (event) => {
        setUser(prev => {
            const name = event.target.name;
            const value = event.target.value;
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    return (
        <Form className='auth-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='firstName' onChange={(e) => formData(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lastName' onChange={(e) => formData(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>User Group</Form.Label>
                <Form.Select name='userGroup' aria-label="Default select example" onChange={(e) => formData(e)}>
                    <option>Select One</option>
                    <option value="resident">Resident</option>
                    <option value="management">Management</option>
                    <option value="security">Security</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' onChange={(e) => formData(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' onChange={(e) => formData(e)} />
            </Form.Group>
            {success === false && <div className='error'><p>{msg}</p></div>}
            <div className="d-grid gap-2">
                <Button variant="primary" size='md' onClick={() => {
                    console.log(user);
                    dispatch(signUp(user))
                }}>Sign Up</Button>
            </div>
        </Form>
    )
}

export default SignUp