import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from './signinAndSignupContext.js';
import { If, Then } from '../if';

function Signin() {
    const loginContext = useContext(LoginContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <If condition={!loginContext.role}>
                <Then>
                    <form onSubmit={e => {
                        e.preventDefault();
                        // console.log('__STATE__ [username]', username)
                        // console.log('__STATE__ [password]', password)
                        loginContext.login(username, password);
                        console.log('context', loginContext.loggedIn)
                    }}
                        style={{
                            border: 'solid blue',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            top: '50%'
                        }}>
                        <input style={{ margin: '5%', padding: '1%' }} name='username' type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
                        <input style={{ margin: '5%', padding: '1%' }} name='password' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                        <input style={{ margin: '5%', padding: '1%' }} type='submit' />
                        <Link style={{ textAlign: 'right' }} to='/signup'>Not registered ?</Link>
                    </form>
                </Then>
            </If>
        </>
    )
}

export default Signin;