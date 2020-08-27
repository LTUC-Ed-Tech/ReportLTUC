import React, { useContext } from 'react';

import useFetch from './hooks/useFetch'
import { Context } from './context/context';
import { If, Then } from './if';
import { LoginContext } from './auth/signinAndSignupContext';

function Pending(props) {
    const loginContext = useContext(LoginContext)
    const stateContext = useContext(Context);

    useFetch('http://localhost:3030/usertopending', {}, stateContext.setPendingUser);
    useFetch('http://localhost:3030/getRoles', {}, stateContext.setRoleNames);
    // console.log('roles', stateContext.roleNames)

    const submitHanler = id => {
        // console.log('event', e.target)
        let pendingId = document.querySelector('table').rows[id].cells['id'].innerText;
        let username = document.querySelector('table').rows[id].cells['username'].innerText;
        let firstName = document.querySelector('table').rows[id].cells['firstName'].innerText;
        let lastName = document.querySelector('table').rows[id].cells['lastName'].innerText;
        let email = document.querySelector('table').rows[id].cells['email'].innerText;
        let role = document.querySelector('table').rows[id].cells['role'].children[0].value;

        let newUser = {
            username: username,
            password: '',
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role
        }

        loginContext.signup(newUser, pendingId)
    }

    return (
        <>
            <If condition={loginContext.user.role === 'admin'}>
                <Then>
                    <table
                        style={{
                            border: 'solid',
                            position: 'absolute',
                            transform: "translate(-50%,-50%)",
                            left: '50%',
                            top: '50%',
                            borderCollapse: 'collapse',
                            width: '80%'
                        }}>
                        <thead>
                            <tr>
                                <th style={{ border: 'solid', padding: '1%' }}>ID</th>
                                <th style={{ border: 'solid', padding: '1%' }}>User Name</th>
                                <th style={{ border: 'solid', padding: '1%' }}>First Name</th>
                                <th style={{ border: 'solid', padding: '1%' }}>Last Name</th>
                                <th style={{ border: 'solid', padding: '1%' }}>Email Address</th>
                                <th style={{ border: 'solid', padding: '1%' }}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stateContext.pendingUser.map((user, idx) => (
                                <tr key={idx}>
                                    <td style={{ border: 'solid', textAlign: 'center' }} >{idx + 1}</td>
                                    <td hidden name='id'>{user._id}</td>
                                    <td style={{ border: 'solid', textAlign: 'center' }} name='username'>{user.user.username}</td>
                                    <td style={{ border: 'solid', textAlign: 'center' }} name='firstName'>{user.user.firstName}</td>
                                    <td style={{ border: 'solid', textAlign: 'center' }} name='lastName'>{user.user.lastName}</td>
                                    <td style={{ border: 'solid', textAlign: 'center' }} name='email'>{user.user.email}</td>
                                    <td style={{ border: 'solid', textAlign: 'center' }} name='role'>
                                        <select>
                                            <option value='none'>-</option>
                                            {stateContext.roleNames.map((role, idx) => (
                                                <option key={idx} value={role.roleName}>{role.roleName}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td style={{ border: 'solid', textAlign: 'center' }}><button type='submit' onClick={() => submitHanler(idx + 1)}>Confirm</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Then>
            </If>
        </>
    )
}

export default Pending;