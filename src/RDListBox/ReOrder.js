import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Button } from 'react-bootstrap';

const ReOrder = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="secondary"> {'^'} </Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary"> {'^^'} </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary"> {'-'} </Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary"> {'--'} </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ReOrder;
