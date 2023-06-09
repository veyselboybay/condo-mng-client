import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { createPost } from '../../features/Posts/postSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";


const NewPost = () => {
    const { user, authToken } = useSelector(store => store.auth);
    const { success, msg } = useSelector(store => store.post);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({});

    const navigate = useNavigate();

    const ChangePostData = (e) => {
        setPostData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className='newPost'>
            <h3>New Post</h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Post Topic:</Form.Label>
                    <Form.Control type="text" name='topic' placeholder="Maintenance" onChange={(e) => ChangePostData(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Post Title:</Form.Label>
                    <Form.Control type="text" name='title' placeholder='Elevator Fix' onChange={(e) => ChangePostData(e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Post Description:</Form.Label>
                    <Form.Control as="textarea" name='description' rows={3} placeholder='Dear residents, ...' onChange={(e) => ChangePostData(e)} />
                </Form.Group>
                {success === false && <div className='error'><p>{msg}</p></div>}
                <Button variant="primary" onClick={() => {
                    try {
                        dispatch(createPost({ ...postData, auth_token: authToken, idByWho: user.id, userGroup: user.userGroup }));
                        navigate('/posts')
                    } catch (error) {
                        console.log(error);
                    }
                }}
                >Submit</Button>
            </Form>
        </div>
    )
}

export default NewPost