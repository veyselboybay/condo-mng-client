import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createParking } from '../../features/Parking/parkingSlice';


const RegisterParking = () => {
    const { authToken } = useSelector(store => store.auth);
    const { success, msg } = useSelector(store => store.parking);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({});

    const navigate = useNavigate();

    const ChangePostData = (e) => {
        setPostData(prev => {
            if (e.target.name === 'year') {
                return {
                    ...prev,
                    [e.target.name]: parseInt(e.target.value)
                }
            }
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className='newPost' style={{ width: '40vw', height: '80vh', overflowY: 'auto' }}>
            <h3>New Parking</h3>
            <Form className='auth-form'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Unit No</Form.Label>
                    <Form.Control type="text" name='unitNo' onChange={(e) => ChangePostData(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Parking Type</Form.Label>
                    <Form.Select name='parkingType' aria-label="Default select example" onChange={(e) => ChangePostData(e)}>
                        <option>Select One</option>
                        <option value="Tenant">Resident</option>
                        <option value="Visitor">Visitor</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>License Plate</Form.Label>
                    <Form.Control type="text" name='licensePlate' onChange={(e) => ChangePostData(e)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" name='year' onChange={(e) => ChangePostData(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" name='model' onChange={(e) => ChangePostData(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Control type="text" name='make' onChange={(e) => ChangePostData(e)} />
                </Form.Group>
                {success === false && <div className='error'><p>{msg}</p></div>}
                <div className="d-grid gap-2">
                    <Button variant="primary" size='md' onClick={() => {
                        dispatch(createParking({ auth_token: authToken, ...postData }))

                        if (success) {
                            navigate('/parking');
                        }
                    }}>Sign Up</Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterParking