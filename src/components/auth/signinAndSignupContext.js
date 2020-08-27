import React, { useState, useEffect, useCallback, createContext } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = 'http://localhost:3030';
const SECRET = 'luminus';

export const LoginContext = createContext();

function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    const login = (username, password) => {

        fetch(`${API}/signin`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
            }),
        })
            .then(res => res.text())
            .then(token => tokenValidator(token))
            // .then(() => console.log('LOGIN STATE', token))
            .catch(e => console.error(e.message))
    }

    const signup = (info, pendingId) => {
        fetch(`${API}/signup`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                user: {
                    username: info.username,
                    password: info.password,
                    firstName: info.firstName,
                    lastName: info.lastName,
                    email: info.email,
                    role: info.role
                },
                _id: pendingId
            })
        })
            .then(res => res.text())
            .then(token => tokenValidator(token))
            .then(() => console.log('user creation worked'))
            .catch(e => console.error(e.message));
    }

    const tokenValidator = useCallback((token) => {
        try {

            let user = jwt.verify(token, SECRET);
            let role = jwt.decode(token).role;
            console.log('role', role)
            setLoginState(true, token, user, role);
        } catch (e) {
            setLoginState(false, null, {});
            console.error('INVALID TOKEN!');

        }
    }, [])

    const setLoginState = (loggedIn, token, user, role) => {
        cookie.save('auth', token)
        setLoggedIn(loggedIn);
        setToken(token);
        setUser(user);
        setRole(role)
    }

    const logout = () => {
        setLoginState(false, null, {}, null)
    }

    useEffect(() => {
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');
        const token = qs.get('token') || cookieToken || null;
        tokenValidator(token);
    }, [tokenValidator])


    const state = {
        loggedIn,
        user,
        token,
        role,
        login: login,
        logout: logout,
        signup: signup
    }

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;