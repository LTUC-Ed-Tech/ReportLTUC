// to get the active students on specific term


import React from 'react';
import { Form, Row, Col, Card, CardBody, CardTitle, FormGroup, Label, Input , Button} from 'reactstrap';
import termListData from '../../data/termName.json'
import { Link } from 'react-router-dom';

const activeStudentForm = () => {
    
    return (
        <>
        <Row>
            <Col md={10} sm={10} className=" justify-content-center p-4">
                <Card className="p-5">
                    <CardTitle className="justify-content-center">
                        Active Student On Specific Term
                    </CardTitle>
                    <CardBody>
                        <Form >
                            <FormGroup>
                                <Label for="selectTerm">
                                    Term
                                </Label>
                                <Input type="select" name="selectTerm" required>
                                    {
                                        termListData.termList.map((option , index) => (
                                        <option key={index}>{option}</option>
                                        ))
                                    }
                                </Input>
                            </FormGroup>
                            {/* color="btn-secondary btn-lg" */}
                                <Button className="m-2 border-3" >Get</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </>
        
    )
}

export default activeStudentForm;