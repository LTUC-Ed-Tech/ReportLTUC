/* eslint-disable no-unused-expressions */
// import bg11Image from 'assets/img/bg/background_1920-11.jpg';
// import bg18Image from 'assets/img/bg/background_1920-18.jpg';
// import bg1Image from 'assets/img/bg/background_640-1.jpg';
// import bg3Image from 'assets/img/bg/background_640-3.jpg';
// import user1Image from 'assets/img/users/100_1.jpg';
// import { UserCard } from 'components/Card';
import Page from 'components/Page';
// import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
// import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import dataJson from '../data/reports.json'
// import { Line } from 'react-chartjs-2';
import activeStudentForm from "./reportsForm/activeStudentForm.js";
import studentInfoForm from './reportsForm/studentInfoForm'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { NavLink, Switch, Route } from 'react-router-dom';

const CardPage = () => {
  return (
    <Page title="Reports" breadcrumbs={[{ name: 'Reports', active: true }]}>
      <Switch>
        <Route path='/activeStudent' component={activeStudentForm}></Route>
        <Route path='/studentInfoForm' component={studentInfoForm}></Route>
      </Switch>

      <Row>
        {dataJson.reports.map((item, index) => (
          <Col key={index} lg={5} md={5} sm={6} xs={12} className="mb-3 ml-10">
            <Card
              inverse
              className={`card-report col-9 border-0  bg-gradient-theme-top`}
              style={{
                height: 300,
              }}
            >
              <CardBody  className="d-flex flex-column justify-content-center align-items-start">
                <CardTitle>{item.cardTitle}</CardTitle>
                <CardText>{item.cardText}</CardText>
              </CardBody>

              <CardBody className="d-flex justify-content-between align-items-center">
            <CardText>{item.cardScope}</CardText>    
                <NavLink exact className="cardLink" to={item.linkCard}><Button  outline color="light" className="button-card d-flex px-4 p-2 m-2">try </Button></NavLink>   
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default CardPage;
