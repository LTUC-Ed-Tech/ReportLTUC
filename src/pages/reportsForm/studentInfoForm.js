// to get student Information

import React from 'react';
import { Form, Row, Col, Card, CardTitle, CardBody, FormGroup, Label , Input, Button } from 'reactstrap';

const studentInfo = () => {
    return (
        <>
           <Row>
               <Col lg={10} md={9} sm={9} className="justify-content-center" >
                <Card className="p-4 m-5">
                    <CardTitle>

                    </CardTitle>
                    <CardBody>
                        <Form onClick={ () => {console.log("hello")}} action="/data" method="get">
                            <FormGroup>
                                <Label for="leadId">
                                    Lead ID :
                                </Label>
                                <Input type="number" name="leadId" id="leadId" placeholder="Enter the lead Id"/>
                            </FormGroup>
                            <Button className="m-2">
                                GET
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
               </Col>
           </Row>
        </>
    )
}

export default studentInfo;