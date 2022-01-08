import React from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListBox from './ListBox';

const allOptions = [
  { key: 'name', order: 2 },
  { key: 'address', order: 3 },
  { key: 'age', order: 4 },
  { key: 'phone', order: 5 },
  { key: 'id', order: 1 },
];

let selectedOptions = [{ key: 'id', order: 1 }];
let availableOptions = [];

const arrangeOptions = () => {
  allOptions.forEach((item) => {
    if (!selectedOptions.find((obj) => obj.key === item.key)) {
      availableOptions.push(item);
    }
  });
};

const RDlistBox = () => {
  arrangeOptions();

  return (
    <Container>
      <Row>
        <Col>
          <ListBox title="Available" options={availableOptions} />
        </Col>
        <Col>
          <ListBox title="Selected" options={selectedOptions} />
        </Col>
      </Row>
    </Container>
  );
};

export default RDlistBox;
