import React, { useState } from 'react'

export const Context = React.createContext();

function StateProvider(props) {
    const [role, setRole] = useState('');
    const [roleNames, setRoleNames] = useState([]);
    const [permissions, setPermissions] = useState([]);
    const [pendingUser, setPendingUser] = useState([])

    const state = {
        role,
        roleNames,
        permissions,
        pendingUser,
        setRole,
        setRoleNames,
        setPermissions,
        setPendingUser
    }

    return (
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    )
}

export default StateProvider;