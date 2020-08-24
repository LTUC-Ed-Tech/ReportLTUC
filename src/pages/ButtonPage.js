import React from 'react';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import Page from 'components/Page';

class ButtonPage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Page
        className="ButtonPage"
        title="Buttons"
        breadcrumbs={[{ name: 'buttons', active: true }]}
      >

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Different Button Sizes</CardHeader>
              <CardBody>
                <Button color="primary" size="sm">
                  Small Button
                </Button>
                <Button color="secondary" size="sm">
                  Small Button
                </Button>
                <Button color="success" size="sm">
                  Small Button
                </Button>
                <Button color="info" size="sm">
                  Small Button
                </Button>
                <Button color="warning" size="sm">
                  Small Button
                </Button>
                <Button color="danger" size="sm">
                  Small Button
                </Button>
                <Button color="link" size="sm">
                  Small Button
                </Button>
              </CardBody>
              <CardBody>
                <Button color="primary">Normal Button</Button>
                <Button color="secondary">Normal Button</Button>
                <Button color="success">Normal Button</Button>
                <Button color="info">Normal Button</Button>
                <Button color="warning">Normal Button</Button>
                <Button color="danger">Normal Button</Button>
                <Button color="link">Normal Button</Button>
              </CardBody>
              <CardBody>
                <Button color="primary" size="lg">
                  Large Button
                </Button>
                <Button color="secondary" size="lg">
                  Large Button
                </Button>
                <Button color="success" size="lg">
                  Large Button
                </Button>
                <Button color="info" size="lg">
                  Large Button
                </Button>
                <Button color="warning" size="lg">
                  Large Button
                </Button>
                <Button color="danger" size="lg">
                  Large Button
                </Button>
                <Button color="link" size="lg">
                  Large Button
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Checkbox and Radio Buttons</CardHeader>
              <CardBody>
                <CardSubtitle>Radio Buttons</CardSubtitle>
                <ButtonGroup>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 1 })}
                    active={this.state.rSelected === 1}
                  >
                    One
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 2 })}
                    active={this.state.rSelected === 2}
                  >
                    Two
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 3 })}
                    active={this.state.rSelected === 3}
                  >
                    Three
                  </Button>
                </ButtonGroup>
                <CardText>Selected: {this.state.rSelected}</CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Checkbox Buttons</CardSubtitle>
                <ButtonGroup>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(1)}
                    active={this.state.cSelected.includes(1)}
                  >
                    One
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(2)}
                    active={this.state.cSelected.includes(2)}
                  >
                    Two
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(3)}
                    active={this.state.cSelected.includes(3)}
                  >
                    Three
                  </Button>
                </ButtonGroup>
                <CardText>
                  Selected: {JSON.stringify(this.state.cSelected)}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ButtonPage;
