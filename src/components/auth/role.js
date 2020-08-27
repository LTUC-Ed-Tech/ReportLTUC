import React, { useContext, useState } from 'react';
import superagent from 'superagent';
import { Context } from '../context/context';
import { If, Then, Else } from '../if';


function Role(props) {

    const stateContext = useContext(Context)
    const [roleFormVisiblity, serRoleFormVisiblity] = useState(true)

    const creatRole = (e) => {

        // console.log('event content', e.target.per)

        let role = e.target.role.value;
        let checkedPermissions = [];

        for (let i = 0; i < e.target.per.length; i++) {
            if (e.target.per[i].checked) {
                checkedPermissions.push(e.target.per[i].value);
            }
        };

        stateContext.setRole(role);
        stateContext.setPermissions(checkedPermissions);

        superagent.post('http://localhost:3030/roleCreatoin')
            .send({ roleName: role, permissions: checkedPermissions })
            .then(res => console.log('ress', res.body))


        serRoleFormVisiblity(false)
    }

    const seeState = () => {
        console.log('Role Name', stateContext.role)
        console.log('permissions', stateContext.permissions)
    }


    return (
        <>
            <If condition={roleFormVisiblity}>
                <Then>
                    <form style={{
                        border: 'solid green',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        transform: 'translate(-50%,-50%)',
                        padding: '1%'
                    }}
                        onSubmit={e => { e.preventDefault(); creatRole(e) }}>
                        <input style={{ margin: '5%' }} type='text' name='role' placeholder='role name' required />
                        <label>a</label>
                        <input style={{ margin: '5%' }} type='checkbox' name='per' value='a' />
                        <label>b</label>
                        <input style={{ margin: '5%' }} type='checkbox' name='per' value='b' />
                        <label>c</label>
                        <input style={{ margin: '5%' }} type='checkbox' name='per' value='c' />

                        <input type='submit' />
                    </form>
                </Then>
                <Else>
                    <p style={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => serRoleFormVisiblity(true)}>Generate</p>
                </Else>
            </If>

            <p style={{ cursor: 'pointer', width: 'fit-content' }} onClick={seeState}>See</p>
        </>
    )
}

export default Role;