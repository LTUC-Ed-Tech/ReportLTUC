import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './auth/signup'
import Signin from './auth/signin';
import LoginProvider from './auth/signinAndSignupContext';
import Header from './header/header';
import Role from './auth/role';
import StateProvider from './context/context';
import Pending from './pending';

function App(props) {
    return (
        <>
            <StateProvider>
                <LoginProvider>
                    <Header />
                    {/* <Aside /> */}
                    {/* <Route exact path='/reports'><Reports /></Route> */}
                    <Route exact path='/pending'><Pending /></Route>
                    <Route exact path='/signup'><Signup /></Route>
                    <Route exact path='/signin'><Signin /></Route>
                    <Route exact path='/roleCreation'><Role /></Route>
                </LoginProvider>
            </StateProvider>
        </>
    )
}

export default App