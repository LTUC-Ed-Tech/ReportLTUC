/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
// to get the active students on specific term


import React, { useState } from 'react';
import { Form, Row, Col, Card, CardBody, CardTitle, FormGroup, Label, Input, Button ,Table } from 'reactstrap';
import {When} from '../../components/if.js';
// import termListData from '../../data/termName.json'
// import { Link } from 'react-router-dom';
// import superagent from "superagent";
const termListData = ['1ST 2013-2014', '1ST 2014-2015', '1ST 2015-2016', '1ST 2016-2017', '1ST 2017-2018', '1ST 2018-2019', '1ST 2019-2020', '2ND 2012-2013', '2ND 2013-2014', '2ND 2014-2015', '2ND 2015-2016', '2ND 2016-2017', '2ND 2017-2018', '2ND 2018-2019', '2ND 2019-2020', '3RD 2013-2014', '3RD 2014-2015', '3RD 2015-2016', '3RD 2016-2017', '3RD 2017-2018', '3RD 2018-2019', 'L2 1 2018/2019', 'L2 2 2018/2019', 'L2 3 2018/2019', 'L3 TERM 1 17/18', 'L3 TERM 1 18/19', 'L3 TERM 2 17/18', 'L3 TERM 2 18/19', 'L3 TERM 3 17/18', 'L3 TERM 3 18/19', 'SC 1 2018-2019', 'SC 2 2019-2020', 'T1 2016-2017', 'T1 2017-2018', 'T1 2018-2019', 'T1 2019-2020', 'T2 2016-2017', 'T2 2017-2018', 'T2 2018-2019', 'T2 2019 - 2020', 'T3 2016-2017', 'T3 2017-2018', 'T3 2018-2019', 'TC 1 17/18', 'TC 1 18/19', 'TC 1 19/20', 'TC 2 17/18', 'TC 2 18/19', 'TC 1 19/20', 'TC 2.2 18/19', 'TC 3 17/18', 'TC 3 18/19', 'TC LWF 1', 'TC LWF 2', 'TRANS- TC1', 'TRANS- TC2', 'TRANS- UNESCO', 'UNESCO4 L2 T1', 'UNESCO4 L2 T1- I', 'UNESCO4 L2 T2', 'UNESCO4 L2 T2- I', 'UNESCO4 L2 T3', 'UNESCO4 L2 T3-I']

const activeStudentForm = () => {

    const [studentList, setStudentList] = useState([]);
    const [term, setSelectTerm] = useState("");
    const [showContent , setShowContent] = useState(false);

    const callApi = (term) => {
        // console.log('eee', term.replace(/\s/g, ''))
        fetch('http://localhost:3050/active', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                term: term
            })
        })
        .then(res => res.json())
            .then(data => getStudentlist(data))
            .catch(error => { console.error("Error !!",error)})
    }

    const pdfApi = async() => {
        await fetch('http://localhost:3050/download', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                studentList : studentList
            })
        })
        .then(data =>console.log("DATA ():" , data.json()))
    }


    const handleTermChange = (e) => {
        console.log("term selected in input", e.target.value);
        setSelectTerm(e.target.value)
    }

    const addItem = (e) => {
        e.preventDefault();
        console.log("term on call api" , e.target.term.value)
        callApi(e.target.term.value);
        setShowContent(!showContent)
        e.target.reset();
    }

    const getStudentlist = (data) => {
        console.log("data(): ------",data.value)
        setStudentList(data.value);
    }

    


    return (
        <>
            <Row>
                <Col md={10} sm={10} className="justify-content-center p-4">
                    <Card className="p-5">
                        <CardTitle className="justify-content-center">
                            Active Student On Specific Term
                    </CardTitle>
                        <CardBody>
                            <Form onSubmit={(e) => { addItem(e) }}>
                                <FormGroup>
                                    <Label for="term">
                                        Term
                                </Label>
                                    <Input type="select" name="term" value={term} onChange={handleTermChange} required>
                                        {
                                            termListData.map((option, index) => (
                                                <option key={index}>{option}</option>
                                            ))
                                        }
                                    </Input>
                                </FormGroup>
                                {/* color="btn-secondary btn-lg" */}
                                <Button type="submit" className="m-2 border-3" >Get</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <When condition={showContent}>
                <h4 className="specific-term">Active Student On {term}</h4>
                <Form onSubmit={pdfApi}>
                <Button target="_blank" className="m-2 border-3" >PDF</Button>
                </Form>
            <div className="table-contaner">
            <table>
                   <thead>
                     <tr>
                          <th>Student Number</th>
                          <th>Enrollment Number</th>
                          <th>FullName</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Term Name</th>
                          <th>Term Code</th>
                          <th>Clock Hours Earned</th>
                          <th>Credit Hours Earned</th>
                          <th>Program name</th>
                          <th>Active Program </th>
                          <th>Program Clock Hours Required</th>
                          <th>Program Credit Hours Required</th>
                     </tr>
                        </thead>
                        <tbody>
                        {                         
                    studentList.map((record , index) => {           
                        return(
                            <tr key={index}>
                                <td>{record.Student.StudentNumber}</td>
                                    <td>{record.Enrollment.EnrollmentNumber}</td>
                                    <td>{record.Enrollment.Student.FullName}</td>
                                    <td>{record.Student.FirstName}</td>
                                    <td>{record.Student.LastName}</td>
                                    <td>{record.Term.Name}</td>
                                    <td>{record.Term.Code}</td>
                                    <td>{record.ClockHoursEarned}</td>
                                    <td>{record.CreditHoursEarned}</td>
                                    <td>{record.Enrollment.ProgramVersion.Name}</td>
                                    <td>{record.Enrollment.ProgramVersion.IsActive}</td>
                                    <td>{record.Enrollment.ProgramVersion.ClockHoursRequired}</td>
                                    <td>{record.Enrollment.ProgramVersion.CreditHoursRequiredd}</td>
                            </tr>
                            )  
                        })
                    }
                        </tbody>
                    </table>
                </div>
            </When>
        </>

    )
}

export default activeStudentForm;