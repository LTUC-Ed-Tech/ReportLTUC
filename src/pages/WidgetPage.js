import React from 'react';

import { Row, Col, Table ,Card,CardHeader, CardBody } from 'reactstrap';

import Page from 'components/Page';
import { NumberWidget, IconWidget } from 'components/Widget';

import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';

const WidgetPage = () => {
  return (
    <Page
      className="WidgetPage"
      title="Pandding Page"
      breadcrumbs={[{ name: 'Pandding', active: true }]}
    >

      <Row className="m-0">
          <Col lg={12} md={12} sm={12} xs={12} className="m-0">
          <Card className="mb-3">
            <CardHeader>Users</CardHeader>
            <CardBody>
              <Table responsive size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Adress</th>
                    <th>Role</th>
                    <th>promotion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Asharor</td>
                    <td>As-har</td>
                    <td>Oran</td>
                    <td>asharashar@g.com</td>
                    <td><input type="select">
                      </input></td>
                      <td><input type="submit" value="confirm"/></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
          </Col>
      </Row>
      {/* <Row>
        {iconWidgetsData.map(
          ({ bgColor, icon, title, subtitle, ...restProps }, index) => (
            <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor={bgColor}
                icon={icon}
                title={title}
                subtitle={subtitle}
                {...restProps}
              />
            </Col>
          )
        )}
      </Row> */}
    </Page>
  );
};

export default WidgetPage;
