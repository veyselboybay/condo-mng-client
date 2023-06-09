import React, { useEffect } from 'react'
import Post from '../Post'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts } from '../../features/Posts/postSlice'


const MyPosts = () => {
    const { success, msg, allPosts, isLoading } = useSelector(store => store.post);
    const { authToken } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts(authToken));
    }, [authToken]);


    return (
        <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            {!success && <>
                <p>{msg}</p>
            </>}
            {allPosts.length === 0 && <>
                <p>No Posts yet!</p>
                <p>Check back again!</p>
            </>}
            {isLoading && <>
                <p>Loading ...</p>
            </>}
            {allPosts && allPosts.map((post, index) => {
                return <Post key={index} {...post} />
            })}
        </div>
    )
}

export default MyPosts