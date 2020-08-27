/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
// to get student Information

import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card, CardTitle, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';
// import { get } from 'superagent';

const studentInfo = () => {
    const [studentList, setStudentList] = useState([]);
    const [selectLeadId, setSelectedLeadId] = useState("");

    const callApi = (leadId) => {
        fetch('http://localhost:3040/data', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                leadId: leadId
            })
        })
            .then(response => response.json())
            .then(data => getStudentlist(data))
        // .catch(error => { console.error("Error !!",error)})
    }

    const handleTermChange = (e) => {
        setSelectedLeadId(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();
        callApi(e.target.leadId.value);
        e.target.reset();
    }

    const getStudentlist = (data) => {
        console.log("data():",data.value)
        setStudentList(data.value);
        console.log(studentList)
    }
    return (
        <>
            <Row>
                <Col lg={10} md={9} sm={9} className="justify-content-center" >
                    <Card className="p-4 m-5">
                        <CardTitle>
                            Get Student Information :
                    </CardTitle>
                        <CardBody>
                            <Form onSubmit={(e) => { addItem(e); console.log('event', e.target.selectLeadId.value) }}>
                                <FormGroup>
                                    <Label for="leadId">
                                        Lead ID :
                                </Label>
                                    <Input type="number" name="selectLeadId" value={selectLeadId} id="leadId" placeholder="Enter the lead Id" onChange={handleTermChange} />
                                </FormGroup>
                                <Button type='submit' className="m-2">
                                    GET
                            </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {
                studentList.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.LeadId}</p>
                            <p>{item.Name}</p>
                            <p>{item.Mobile}</p>
                            <p>{item.Email}</p>
                            <p>{item.NavigationNationalityId.NationalityDescrip}</p>
                        </div>
                    )
                })

            }
        </>
    )
}

export default studentInfo;