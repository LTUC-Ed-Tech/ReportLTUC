import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import superagent from 'superagent';

// import { LoginContext } from './signinAndSignupContext';
import { Context } from '../context/context'
import { If, Then, Else } from '../if';

function Signin() {
    // const loginContext = useContext(LoginContext);
    const stateContext = useContext(Context);
    const [showForm, setShowForm] = useState(true);


    const saveToPendding = (e) => {
        e.preventDefault();
        let user = {
            username: e.target.username.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value
        }

        superagent.post('http://localhost:3030/usertopending')
            .send({ user: user })
            .then(() => setShowForm(false))
        // console.log('state', stateContext.penddingUser)
        // console.log('user', user)
    }

    return (
        <>
            <If condition={showForm}>
                <Then>
                    <form onSubmit={saveToPendding} style={{
                        border: 'solid',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '50%'
                    }}>
                        <input style={{ margin: '5%', padding: '1%' }} name='username' type='text' placeholder='Username' />
                        <input style={{ margin: '5%', padding: '1%' }} name='firstName' type='text' placeholder='First Name' />
                        <input style={{ margin: '5%', padding: '1%' }} name='lastName' type='text' placeholder='Last Name' />
                        <input style={{ margin: '5%', padding: '1%' }} name='email' type='email' placeholder='Email address' />
                        <input style={{ margin: '5%', padding: '1%' }} type='submit' />
                        <Link style={{ textAlign: 'right' }} to='/signin' >Log in</Link>
                    </form>
                </Then>
                <Else>
                    <h3>
                        Thanks For submitting
                    </h3>
                    <p onClick={() => setShowForm(true)}>Submit Another Form?</p>
                </Else>
            </If>

            <p onClick={() => setShowForm(false)}>hide</p>
            <p onClick={() => console.log('here', stateContext.pendingUser)}>Click me</p>
        </>
    )
}

export default Signin