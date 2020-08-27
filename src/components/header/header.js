import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import superagent from 'superagent'

// import { Context } from '../context/context'
import { LoginContext } from '../auth/signinAndSignupContext';

import { Then } from '../if';

import adv from '../../assets/adv.gif'
import acc from '../../assets/acc.gif'

function Header(props) {

    const loginContext = useContext(LoginContext);
    // const stateContext = useContext(Context)

    return (
        <header>
            {loginContext.loggedIn ? <h1>{loginContext.role} In<p style={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => loginContext.logout()}>exit</p> </h1> : <h1>Out</h1>}

            <Then condition={loginContext.role === 'advisor'} >
                <img src={adv} alt='adv' />
            </Then>

            <Then condition={loginContext.role === 'accountant'} >
                <img src={acc} alt='acc' />
            </Then>

            {/* <If condition={loginContext.role === 'admin'} >
                <Then>
                    <img src={adv} alt='adv' />
                    <img src={acc} alt='acc' />
                </Then>
            </If> */}

            <div>
                <Link style={{ border: 'solid black', padding: '1%', margin: '1%', backgroundColor: 'salmon' }} to='/signup'>Register</Link>
                <Link style={{ border: 'solid black', padding: '1%', margin: '1%', backgroundColor: 'salmon' }} to='/signin'>Log In</Link>
                <Link style={{ border: 'solid black', padding: '1%', margin: '1%', backgroundColor: 'salmon' }} to='/roleCreation'>Create Role</Link>
                <Link style={{ border: 'solid black', padding: '1%', margin: '1%', backgroundColor: 'salmon' }} to='/pending'>Pending</Link>
                <Link to='/reports'>Reports</Link>
            </div>
        </header>
    )
}

export default Header