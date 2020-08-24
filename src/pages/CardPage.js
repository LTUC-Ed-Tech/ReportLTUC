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

const CardPage = () => {
  return (
    <Page title="Cards" breadcrumbs={[{ name: 'cards', active: true }]}>

      <Row>
        {dataJson.reports.map((item, index) => (
          <Col key={index} lg={4} md={5} sm={6} xs={12} className="mb-3">
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
                <Button outline color="light" className="button-card px-4 m-2">
                  Try
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default CardPage;
