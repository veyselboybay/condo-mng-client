import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import SignUp from '../../Auth/SignUp';
import SignIn from '../../Auth/SignIn';
import './index.css'

const AuthLayout = () => {
    return (
        <Tabs
            defaultActiveKey="signIn"
            id="justify-tab-example"
            className="mb-3 auth-layout"
            justify
        >
            <Tab eventKey="signIn" title="Sign In" className='auth'>
                <SignIn />
            </Tab>
            <Tab eventKey="signUp" title="Sign Up" className='auth'>
                <SignUp />
            </Tab>
        </Tabs>
    );
}

export default AuthLayout